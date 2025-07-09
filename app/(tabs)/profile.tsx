//import { Link } from "expo-router";
//import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import ImageProfile from '../components/imageProfile';


const PlaceholderImage = require('@/assets/images/IMG_20210728_094200_399.jpg');

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
          <ImageProfile imgSource={selectedImage || PlaceholderImage} />
          <Text style={styles.text}> Ahmed Hasan</Text>
          <Text style={styles.text}> 25 \ 06 \ 1994 </Text>
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
    fontSize: 18,
    margin: 7,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
})