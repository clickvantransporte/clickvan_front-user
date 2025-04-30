import { View, Text, TouchableOpacity,} from "react-native";
import {router} from "expo-router";
import {styles} from "./styles";
import { TextBox } from "@/src/components/textBox";
import LogoSvg from "@/src/assets/svg/logoSvg";
import FacebookSvg from "@/src/assets/svg/facebookSvg";
import GoogleSvg from "@/src/assets/svg/googleSvg";

export default function Register({...rest}) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoSvg width={272} height={284} />
            </View>
            <TouchableOpacity style={[styles.socialButton,{backgroundColor: "#fff", borderWidth: 1, borderColor: "#E3E3E7",}]} activeOpacity={0.8} {...rest}>
                <FacebookSvg width={22} height={22} />
                <Text style={styles.boxTitle} >Inscreva-se com Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, {backgroundColor: "#fff", borderWidth: 1, borderColor: "#E3E3E7",}]} activeOpacity={0.8} {...rest}>
                <GoogleSvg width={22} height={22} />
                <Text style={styles.boxTitle} >Inscreva-se com Google</Text>
            </TouchableOpacity> 
            <View style={{flexDirection: "row", justifyContent: 'center', padding: 5}}>
                <View style={{ height: 1, backgroundColor: '#000', width: '30%'}} />
                <Text>OU</Text>
                <View style={{ height: 1, backgroundColor: '#000', width: '30%' }} />
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#FFE100",}]}  activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/credentials')}> 
                <Text style={[styles.buttonTitle, {color: "#222831"}]}>Use seu e-mail</Text>
            </TouchableOpacity>
            <View style={{justifyContent: "center", alignItems: "center", marginVertical: 35}}>
                <TouchableOpacity activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/login')}>
                    <View style={{flexDirection: "row", justifyContent: 'center', padding: 5}}>
                    <Text style={styles.loginText}>Já possui uma conta?</Text>
                    <Text style={[styles.loginText, {fontWeight: "bold", paddingHorizontal: 5}]} >Fazer Login</Text>
                    </View>
                </TouchableOpacity>                              
            </View>                               
        </View>
    );
}