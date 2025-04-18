import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type props = {
    title: string,
} & TouchableOpacityProps;

export default function Button({title, ...rest}: props) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}