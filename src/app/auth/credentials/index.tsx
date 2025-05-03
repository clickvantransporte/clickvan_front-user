import { View, Text, TouchableOpacity,} from "react-native";
import {router} from "expo-router";
import {styles} from "./styles";
import ClickVanSvg from "@/src/assets/svg/clickVanSvg";
import { TextBox } from "@/src/components/textBox";
import { Shadow } from "react-native-shadow-2";

export default function Credentials({...rest}) {
    return (
        <View style={styles.container}>
            <View>
                <ClickVanSvg width={97} height={43}/>
                <Text style={styles.title}>Login</Text>
            </View>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
                offset={[0, 2]}
                style={{borderRadius: 10}}
                stretch>
                    <TextBox placeholder="Nome Completo" />
            </Shadow>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
                offset={[0, 2]}
                style={{borderRadius: 10}}
                stretch>
                    <TextBox placeholder="CPF" />
            </Shadow>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
                offset={[0, 2]}
                style={{borderRadius: 10}}
                stretch>
                    <TextBox placeholder="E-mail" />
            </Shadow>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
                offset={[0, 2]}
                style={{borderRadius: 10}}
                stretch>
                    <TextBox placeholder="Celular" />
            </Shadow>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
                offset={[0, 2]}
                style={{borderRadius: 10}}
                stretch>
                    <TextBox placeholder="Senha" />
            </Shadow>
            <Shadow startColor="#0002" distance={2} containerStyle={{width: '100%'}}
                offset={[0, 2]}
                style={{borderRadius: 10}}
                stretch>
                    <TextBox placeholder="Confirme a senha" />
            </Shadow>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#FFE100", marginVertical: 15}]}  activeOpacity={0.8} {...rest} onPress={() => router.navigate('/auth/credentials')}> 
                <Text style={[styles.buttonTitle, {color: "#222831"}]}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}