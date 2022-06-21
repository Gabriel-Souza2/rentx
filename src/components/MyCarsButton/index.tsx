import React from 'react';

import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { RectButtonProps } from 'react-native-gesture-handler';


import {
    Container
} from './styles';

interface Props extends RectButtonProps {
    onPress: () => void;
}

export function MyCarsButton({ onPress, ...rest }: Props) {
    const theme = useTheme();
    return (
        <Container onPress={onPress} {...rest}>
            <Ionicons 
                name="ios-car-sport" 
                color={theme.colors.background_secondary}
                size={32}
            />
        </Container>
    );
}