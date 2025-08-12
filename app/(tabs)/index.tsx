//import { Link } from "expo-router";
//import { Image } from "expo-image";
import Button from '@/app/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from "react-native";
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
    //
  }
  return (
    
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
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
      
    </View>
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
    backgroundColor:  '#0aa',
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