//import { Link } from "expo-router";
//import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "../components/imageViewer";
import Button from '@/app/components/Button'


const PlaceholderImage = require('@/assets/images/9121424.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="choose a photo" />
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