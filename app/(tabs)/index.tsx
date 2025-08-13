//import { Link } from "expo-router";
//import { Image } from "expo-image";
import Button from '@/app/components/Button';
import domtoimage from 'dom-to-image';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from "expo-media-library";
import { useRef, useState } from 'react';
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import CircleButton from '../components/CircleButton';
import EmojiList from '../components/Emojilist';
import EmojiPicker from '../components/EmojiPicker';
import EmojiSticker from '../components/EmojiSticker';
import IconButton from '../components/IconButton';
import ImageViewer from "../components/imageViewer";


const PlaceholderImage = require('@/assets/images/9121424.jpg');

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModelVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('you did not select any image.');
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModelVisible(true);
  };
  const onModalClose = () => {
    setIsModelVisible(false);
  };
  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') { 
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
    }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smach.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
      
  };
  return (    
    <GestureHandlerRootView style={styles.container}>
      
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
          </View>
        </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      </View>
          ) : (
        <View style={[styles.footerContainer, {borderRadius: 10}]}>
        <Button onPress={pickImageAsync} theme="primary" label="choose a photo" />
        <Button label="use this photo"  onPress={() => setShowAppOptions(true)}/>
      </View>
        )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
  },
  scrollview: {
    height: 75,
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    marginTop: 25,
    paddingTop: 20,
    marginBottom: 10,
  },
      optionsContainer: {
        position: 'absolute',
      bottom: 80,
  },
      optionsRow: {
        alignItems: 'center',
      flexDirection: 'row',
      }
});