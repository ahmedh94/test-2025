import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
                <Text style={styles.pragraph}>Ahmed is a person trying to develop himself and his skills. That is why he studied website development and joined Open Learning to study learning technology and study some courses on writing clean code, databases and programming in Python. Within my studies at the College of Education Technology and he studied operating systems and types of Internet networks, he can use wow.js, font Awesome, and Google Fonts.
         He hopes to be an employee in one of the companies and hopes that he will meet your expectations.
      Ahmed is a person trying to develop himself and his skills. That is why he studied website development and joined Open Learning to study learning technology and study some courses on writing clean code, databases and programming in Python. Within my studies at the College of Education Technology and he studied operating systems and types of Internet networks, he can use wow.js, font Awesome, and Google Fonts.
                  He hopes to be an employee in one of the companies and hopes that he will meet your expectations.
                </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
    justifyContent: "center",
  },
  pragraph: {
    padding: 25,
    fontSize: 18,
    color: '#fff',
    lineHeight: 25,
  }
})