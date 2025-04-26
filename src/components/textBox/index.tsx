import { TouchableOpacityProps, TextInputProps, TextInput } from "react-native";
import { styles } from "./styles";

export function TextBox ({... rest}: TextInputProps) {
    return <TextInput numberOfLines={1} style={styles.input} {...rest} />
}