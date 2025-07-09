import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    imgSource: ImageSourcePropType;
}
export default function ImageProfile({ imgSource }: Props) {
    return <Image source={imgSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 25,
    }
})