import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Information
} from './styles';

interface AcessoryProps {
    text: string;
    Icon: React.FC<SvgProps>
}
export function Accessory({ text, Icon }: AcessoryProps) {
    return (
        <Container>
            <Icon />
            <Information>
                { text }
            </Information>
        </Container>
    );
}