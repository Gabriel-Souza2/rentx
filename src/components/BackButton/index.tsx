import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Icon
} from './styles';

interface BackButtonProps extends BorderlessButtonProps {
    color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <Icon 
            name="chevron-left"
            size={24}
            color={color ? color : theme.colors.text_detail}
            />
        </Container>
    
    );
}