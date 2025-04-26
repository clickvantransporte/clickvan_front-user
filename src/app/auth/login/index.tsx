import { View, Text, TouchableOpacity, Image,} from "react-native";
import {router} from "expo-router";
import {TextBox} from "@/src/components/textBox";
import {styles} from "./styles";
import {Colors} from "react-native/Libraries/NewAppScreen";

export default function App({...rest}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextBox placeholder="E-mail"></TextBox>
            <TextBox placeholder="Senha"></TextBox>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#FFE100",}]}  activeOpacity={0.8} {...rest}> 
                <Text style={[styles.buttonTitle, {color: "#222831", fontWeight: "bold"}]}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between",}}>
                <TouchableOpacity style={[styles.socialButton, {backgroundColor: "#fff", borderWidth: 1, borderColor: "#E3E3E7",}]} activeOpacity={0.8} {...rest}>
                    <Text style={[styles.buttonTitle, {color: "#222831", fontWeight: "bold"}]}>FB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, {backgroundColor: "#fff", borderWidth: 1, borderColor: "#E3E3E7",}]} activeOpacity={0.8} {...rest}>
                    <Text style={[styles.buttonTitle, {color: "#222831", fontWeight: "bold"}]}>G</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: "center", alignItems: "center", marginVertical: 35}}>
                <TouchableOpacity activeOpacity={0.8} {...rest}> 
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>                        
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#222831",}]}  activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/register')}> 
                    <Text style={[styles.buttonTitle, {color: "#fff", fontWeight: "bold"}]}>Criar uma conta</Text>
            </TouchableOpacity>      
        </View>
    );
}
