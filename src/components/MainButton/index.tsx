import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title
} from './styles';

interface MainButtonProps extends RectButtonProps {
    text: string;
    onPress: () => void;
    color: string;
    activeIndicator?: boolean;
}

export function MainButton({ 
    text, 
    color, 
    onPress, 
    activeIndicator = false, 
    ...rest 
}: MainButtonProps) {
    const theme = useTheme();
    return (
        <Container onPress={onPress} color={color} {...rest}>
            {
                activeIndicator ? 
                    <ActivityIndicator color={theme.colors.background_secondary}/> 
                        :
                    <Title>
                        { text }
                    </Title>
            }
        </Container>
    );
}