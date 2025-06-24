import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
    label: string;
    theme?: 'primary';
}

export default function Button({ label, theme }: Props) {
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 2, borderColor: '#ffd33d', borderRadius: 18, }]}>
                <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => alert('you press a button')}>
                    <FontAwesome name="image" size={18} color="#25292e" style={styles.buttonIcone} />
                    <Text style={[styles.buttonLable, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('you pressed a button')}>
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