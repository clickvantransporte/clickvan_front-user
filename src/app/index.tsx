import { View, Text, StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";
import Button from "../components/button";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>
            <TextInput style={styles.textInput} multiline></TextInput>
            <Button title='Avançar' activeOpacity={0.8} onPress={() => router.navigate('/menu')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#000',
        padding: 20,
    },
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