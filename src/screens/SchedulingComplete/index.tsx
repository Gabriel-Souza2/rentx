import React from 'react';
import { StatusBar } from 'react-native';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import Done from '../../assets/done.svg';

import {
    Container,
    Title,
    Message,
    Content
} from './styles';
import { ConfirmationButton } from '../../components/ConfirmationButton';

export function SchedulingComplete() {
    const { width } = useWindowDimensions();

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <LogoSvg width={width}/>
            <Content>
                <Done />
                <Title>
                    Carro Alugado!
                </Title>
                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
                <ConfirmationButton title="ok"  onPress={() => {}}/>
            </Content>
        </Container>
    );
}