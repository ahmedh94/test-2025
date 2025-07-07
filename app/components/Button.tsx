import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer]}>
                <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
                    <FontAwesome name="image" size={18} color="#25292e" style={styles.buttonIcone} />
                    <Text style={[styles.buttonLable, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLable}> {label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcone: {
        paddingRight: 8,
    },
    buttonLable: {
        color: '#fff',
        fontSize: 16,
    }
})