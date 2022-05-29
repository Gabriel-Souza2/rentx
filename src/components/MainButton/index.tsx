import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title
} from './styles';

interface MainButtonProps extends RectButtonProps {
    text: string;
    onPress: () => void;
    color: string;
}

export function MainButton({ text, color, onPress, ...rest }: MainButtonProps) {
    return (
        <Container onPress={onPress} color={color} {...rest}>
            <Title>
                { text }
            </Title>
        </Container>
    );
}