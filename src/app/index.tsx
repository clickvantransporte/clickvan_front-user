import { View, Text, StyleSheet, Image, TextInput, } from "react-native";
import { router } from "expo-router";
import Button from "../components/button";
import { SvgXml } from 'react-native-svg';
import GoogleSvg from '@/assets/images/googleSvg'



export default function App() {
    return (
        <>
            <GoogleSvg></GoogleSvg>
            <Image style={styles.logo} source={require("../../assets/images/logo.png")}></Image>
            <View style={styles.containerText}>
                <Text style={styles.intro}>Bem-vindo ao</Text>
                <Text style={styles.title} onPress={() => router.navigate('/menu')}>Clickvan</Text>
                <Text style={styles.subtitle}>
                    Encontre o transporte ideal, anuncie sua van ou frete em passos simples, tudo na palma da sua mão.
                    {'\n\n'}
                    <Text style={styles.subtitleText}>Você está a um click de facilitar seus deslocamentos.</Text>
                </Text>
            </View>
            <Button title="Vamos Começar" backgroundColor="#222831" onPress={() => router.navigate('/menu')}></Button>
        </>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 200,
        resizeMode: 'contain',
    },
    containerText: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 5,
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