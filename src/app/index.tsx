import { View, Text, StyleSheet, Image, } from "react-native";
import { router } from "expo-router";
import Button from "../components/button";

export default function App() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/images/logo.png")}></Image>
            <View style={styles.containerText}>
                <Text style={styles.intro}>Bem-vaiudo ao</Text>
                <Text style={styles.title}>Clickvan</Text>
                <Text style={styles.subtitle}>
                    Encontre o transporte ideal, anuncie sua van ou frete em passos simples, tudo na palma da sua mão.
                    {'\n\n'}
                    <Text style={styles.subtitleText}>Você está a um click de facilitar seus deslocamentos.</Text>
                </Text>
            </View>
            <Button title="Vamos Começar" backgroundColor="#222831" onPress={() => router.navigate('/menu')}></Button>
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
    },
    logo: {
        height: 200,
        resizeMode: 'contain',
    },
    containerText: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 5,
        backgroundColor: '#fff',
        padding: 10,
    },
    intro: {
        fontSize: 25,
        fontWeight: 400,
        fontStyle: 'italic',
        color: '#222831',
    },
    title: {
        fontSize: 56,
        fontWeight: 700,
        color: '#222831',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 400,
        color: '#7B7F9E',
    },
    subtitleText: {
        fontWeight: 700,
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