import { View, Text, TouchableOpacity,} from "react-native";
import {router} from "expo-router";
import {TextBox} from "@/src/components/textBox";
import {styles} from "./styles";
import { Shadow } from "react-native-shadow-2";
import SlideModal from "@/src/components/slideModal";
import { useRef } from "react";
import FacebookSvg from "@/src/assets/svg/facebookSvg";
import GoogleSvg from "@/src/assets/svg/googleSvg";

export default function Login({...rest}) {

    const modalRef = useRef()

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
            offset={[0, 2]}
            style={{borderRadius: 10}}
            stretch>
                <TextBox placeholder="E-mail" />
            </Shadow>
            <TextBox placeholder="Senha"></TextBox>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#FFE100",}]}  activeOpacity={0.8} {...rest}> 
                <Text style={[styles.buttonTitle, {color: "#222831", fontWeight: "bold"}]}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between",}}>
                <TouchableOpacity style={[styles.socialButton, {backgroundColor: "#fff", borderWidth: 1, borderColor: "#E3E3E7",}]} activeOpacity={0.8} {...rest}>
                    <FacebookSvg width={35} height={35} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, {backgroundColor: "#fff", borderWidth: 1, borderColor: "#E3E3E7",}]} activeOpacity={0.8} {...rest}>
                    <GoogleSvg width={35} height={35} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: "center", alignItems: "center", marginVertical: 35}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {modalRef.current.openModal()}} {...rest}> 
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>                                  
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#222831",}]}  activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/register')}> 
                    <Text style={[styles.buttonTitle, {color: "#fff", fontWeight: "bold"}]}>Criar uma conta</Text>
            </TouchableOpacity>      
        </View>
        <SlideModal start="right" toValue={500} duration={500} ref={modalRef} viewWidth={'50%'} viewHeight={'50%'} >
        </SlideModal>
        </>
    );
}
