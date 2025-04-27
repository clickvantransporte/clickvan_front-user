import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

import { styles } from "./styles";
import { Shadow } from 'react-native-shadow-2';

type props = {
    title: string,
    backgroundColor: string,
} & TouchableOpacityProps;

export default function Button({title, backgroundColor, ...rest}: props) {
    return (
        <Shadow containerStyle={{width: '100%'}} distance={5} startColor="#00000055" offset={[-5, 5]} stretch>
            <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor, width: '100%'}]} activeOpacity={0.8} {...rest}>
                <Text style={[styles.title, {color: '#fff', fontSize: 24, fontWeight: 700}]}>{title}</Text>
            </TouchableOpacity>
        </Shadow>
    );
}