import { View, Text, TouchableOpacity, Modal, Animated, Easing } from 'react-native';
import {router} from "expo-router";
import {TextBox} from "@/src/components/textBox";
import { styles } from './styles';
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

type props = {
    start: string;
    toValue: number;
    duration: number;
    viewWidth: any;
    viewHeight: any;
};

const SlideModal = ({start, toValue, duration, viewWidth, viewHeight, ...rest}: props, ref: any) => {

    if (start == 'left' || start == 'top') {
        toValue *= -1;
    }
    const [isModalVisible, setIsModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(toValue)).current; // Começa acima da tela

    const openModal = () => {
        setIsModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: duration,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(slideAnim, {
            toValue: toValue,
            duration: duration,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => setIsModalVisible(false));
    };

    useImperativeHandle(ref, () => ({
        openModal
      }));

    return (
            <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="fade"
            onRequestClose={closeModal}
            {...rest}
            >
                <View style={styles.modalOverlay}>
                    <Animated.View style={[
                        styles.modalContainer,
                        {
                            width: viewWidth,
                            height: viewHeight,
                            transform: [start == 'left' || start == 'right' ? { translateX: slideAnim } : { translateY: slideAnim }]
                        }
                    ]}>
                        
                    </Animated.View>
                </View>
            </Modal>
    );
}

export default forwardRef(SlideModal)