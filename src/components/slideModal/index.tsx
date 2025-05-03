import { View, Text, TouchableOpacity, Modal, Animated, Easing, FlexAlignType } from 'react-native';
import {router} from "expo-router";
import {TextBox} from "@/src/components/textBox";
import { styles } from './styles';
import React, { useState, useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';

type props = {
    children?: ReactNode;
    start: string;
    toValue: number;
    duration: number;
    viewWidth: any;
    viewHeight: any;
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignItems?: FlexAlignType;
    borderRadius?: number | [number, number, number, number];
};

export interface SlideModalRef {
    openModal: () => void;
    closeModal: () => void;
}

const SlideModal = ({children, start, toValue, duration, viewWidth, viewHeight, justifyContent, alignItems, borderRadius, ...rest}: props, ref: React.Ref<SlideModalRef>) => {

    console.log('children ' + children)
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
        openModal,
        closeModal
    }));

    const getBorderRadiusStyle = () => {
        if (borderRadius == null) {
            return {};
        }
        else if (typeof borderRadius === 'number') {
            return {
                borderRadius: borderRadius,
            };
        } else {
            return {
                borderTopLeftRadius: borderRadius[0],
                borderTopRightRadius: borderRadius[1],
                borderBottomRightRadius: borderRadius[2],
                borderBottomLeftRadius: borderRadius[3],
            };
        }
    };

    return (
            <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="fade"
            onRequestClose={closeModal}
            {...rest}
            >
                <View style={[styles.modalOverlay, { justifyContent, alignItems }]}>
                    <Animated.View style={[
                        styles.modalContainer,
                        {
                            width: viewWidth,
                            height: viewHeight,
                            transform: [start == 'left' || start == 'right' ? { translateX: slideAnim } : { translateY: slideAnim }],
                        },
                        getBorderRadiusStyle()
                    ]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>
    );
}

export default forwardRef(SlideModal)