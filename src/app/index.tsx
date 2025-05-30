import { View, Text, StyleSheet, Image, } from "react-native";
import { router } from "expo-router";
import Button from "../components/button";
import LogoSvg from "../assets/svg/logoSvg";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}>Bem-vindo ao</Text>
            <LogoSvg width={313} height={326} />
            <View style={styles.containerText}>
                <Text style={styles.subtitle}>
                    Encontre o transporte ideal, anuncie sua van ou frete em passos simples, tudo na palma da sua mão.
                    {'\n\n'}
                    <Text style={styles.subtitleText}>Você está a um click de facilitar seus deslocamentos.</Text>
                </Text>
            </View>
            <Button title="Vamos Começar" backgroundColor="#222831" onPress={() => router.navigate('/auth/login')} />
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
        width: '100%',
        paddingHorizontal: 10,
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