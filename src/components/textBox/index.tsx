import { TouchableOpacityProps, TextInputProps, TextInput, StyleProp, TextStyle } from "react-native";
import { styles } from "./styles";

type props = {
    style: StyleProp<TextStyle>
} & TouchableOpacityProps;

export function TextBox ({style, ... rest}: TextInputProps) {
    return <TextInput numberOfLines={1} style={[styles.input, style]} {...rest} />
}