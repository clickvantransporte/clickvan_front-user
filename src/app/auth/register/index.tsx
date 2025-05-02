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
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 5}}>
                <View style={{ height: 3, backgroundColor: '#E3E3E7', width: '45%'}} />
                <Text style={{paddingHorizontal: 5, color: "#222831" }}>OU</Text>
                <View style={{ height: 3, backgroundColor: '#E3E3E7', width: '45%'}} />
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#FFE100",}]}  activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/credentials')}> 
                <Text style={[styles.buttonTitle, {color: "#222831"}]}>Use seu e-mail</Text>
            </TouchableOpacity>
            <View style={{justifyContent: "center", alignItems: "center", marginVertical: 10}}>
                <TouchableOpacity activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/login')}>
                    <View style={{flexDirection: "row", justifyContent: 'center',}}>
                    <Text style={{fontSize: 16, color: "#7B7F9E"}}>Já possui uma conta?</Text>
                    <Text style={{fontSize: 16, color: "222831", fontWeight: "bold", paddingHorizontal: 5}} >Fazer Login</Text>
                    </View>
                </TouchableOpacity>                              
            </View>                               
        </View>
    );
}