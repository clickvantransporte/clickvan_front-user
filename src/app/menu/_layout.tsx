import { useFonts } from "expo-font";
import { SplashScreen, Stack, Slot } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {  
    return (
      <>
        <Text>asdfasfsaf</Text>
        <Slot />
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        gap: 20,
    },
});