import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Icon
} from './styles';

interface BackButtonProps extends BorderlessButtonProps {
    color: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
    return (
        <Container {...rest}>
            <Icon name="chevron-left"/>
        </Container>
    
    );
}