//import { Link } from "expo-router";
//import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
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
        <ScrollView>
          <Text style={styles.pragraph}>Ahmed is a person trying to develop himself and his skills. That is why he studied website development and joined Open Learning to study learning technology and study some courses on writing clean code, databases and programming in Python. Within my studies at the College of Education Technology and he studied operating systems and types of Internet networks, he can use wow.js, font Awesome, and Google Fonts.
   He hopes to be an employee in one of the companies and hopes that he will meet your expectations.
Ahmed is a person trying to develop himself and his skills. That is why he studied website development and joined Open Learning to study learning technology and study some courses on writing clean code, databases and programming in Python. Within my studies at the College of Education Technology and he studied operating systems and types of Internet networks, he can use wow.js, font Awesome, and Google Fonts.
            He hopes to be an employee in one of the companies and hopes that he will meet your expectations.
          </Text>
            </ScrollView>
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
  pragraph: {
    padding: 15,
    fontSize: 16,
    color: '#fff',
    lineHeight: 25,
  }
})