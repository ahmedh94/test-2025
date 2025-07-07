//import { Link } from "expo-router";
//import { Image } from "expo-image";
import Button from '@/app/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import ImageViewer from "../components/imageViewer";


const PlaceholderImage = require('@/assets/images/9121424.jpg');

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>( undefined );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('you did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={ selectedImage || PlaceholderImage} />
        <ImageViewer imgSource={ selectedImage || PlaceholderImage} />
      </View>
      
      <View style={styles.footerContainer}>
        <Button onPress={pickImageAsync} theme="primary" label="choose a photo" />
        <Button label="use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
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
  }
})