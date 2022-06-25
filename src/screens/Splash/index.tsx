import React, { useEffect } from 'react';
import Animated, { 
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedStyle, 
    useSharedValue,
    withSequence,
    withTiming
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import {
    Container
} from './styles';

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'

export function Splash() {
    const navigator = useNavigation();

    const breandValue = useSharedValue(0);
    const logoValue = useSharedValue(0);

    const brandAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(breandValue.value, 
                [0, 50], 
                [0, 1],
                Extrapolate.CLAMP
            ),
        }
    });

    const logoAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(logoValue.value, 
                [0, 50], 
                [0, 1],
                Extrapolate.CLAMP
            ),
        }
    });

    function startApp() {
        navigator.navigate('Home');
    }

    useEffect(() => {
        breandValue.value = withSequence(
            withTiming(50, {duration: 3500}),
            withTiming(0, {duration: 3500}, () => {
                logoValue.value = withSequence( 
                    withTiming(50, {duration: 3500}),
                    withTiming(0, {duration: 3500}, () => {
                        'workelt'
                        runOnJS(startApp)();
                    })
                )
            })
        );
    });

    return (
        <Container>
            <Animated.View style={brandAnimation}>
                <BrandSvg />
            </Animated.View>
            <Animated.View style={logoAnimation}>
                <LogoSvg />
            </Animated.View>
        </Container>
    );
}