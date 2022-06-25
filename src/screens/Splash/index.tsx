import React from 'react';
import { Button, StyleSheet } from 'react-native';
import Animated, { 
    useAnimatedStyle, 
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

import {
    Container
} from './styles';

export function Splash() {
    const animation = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(animation.value * 255)}]
        }
    });

    return (
        <Container>

            <Animated.View style={[styles.box, animatedStyles]} />
            <Button onPress={() => { animation.value = Math.random() }} title="Move"/>

        </Container>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#ff0000'
    }
})