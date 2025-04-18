import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type props = {
    title: string,
    backgroundColor: string,
} & TouchableOpacityProps;

export default function Button({title, backgroundColor, ...rest}: props) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor, width: '100%'}]} activeOpacity={0.8} {...rest}>
            <Text style={[styles.title, {color: '#fff', fontSize: 24, fontWeight: 700}]}>{title}</Text>
        </TouchableOpacity>
    );
}