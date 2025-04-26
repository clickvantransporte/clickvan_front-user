import { View, Text, TouchableOpacity, Image,} from "react-native";
import {router} from "expo-router";
import {TextBox} from "@/src/components/textBox";
import {styles} from "./styles";

export default function App({...rest}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
    
        </View>
    );
}