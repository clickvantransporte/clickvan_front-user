import { View, Text, StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";
import Button from "@/src/components/button";

export default function App() {
    return (
        <>
            <Text style={styles.title}>Menu</Text>
            <Button title='Voltar' backgroundColor="red" onPress={() => router.back()}></Button>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 500,
        color: '#ddd',
    },
    textInput: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#333',
        fontSize: 30,
        color: '#ddd',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
    },
});