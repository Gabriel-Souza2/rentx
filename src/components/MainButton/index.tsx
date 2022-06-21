import React from 'react';
import { ActivityIndicator, TurboModuleRegistry } from 'react-native';
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
    enabled?: boolean 
}

export function MainButton({ 
    text, 
    color, 
    onPress, 
    activeIndicator = false, 
    enabled = true,
    ...rest 
}: MainButtonProps) {
    const theme = useTheme();
    return (
        <Container 
            enabled={enabled}
            onPress={onPress} 
            color={color}
            style={{opacity: enabled ? 1 : 0.5}}
            {...rest}>
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