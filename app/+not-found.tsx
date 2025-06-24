import { Link, Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oopd! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
})