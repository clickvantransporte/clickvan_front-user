import { useFonts } from "expo-font";
import { SplashScreen, Stack, Slot } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
    const [loaded] = useFonts({
      SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    });
  
    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
  
    if (!loaded) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        <Slot />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      gap: 20,
      fontSize: 75,
      
    },
});