import React from 'react';
import { StatusBar } from 'react-native';

import { CardCar } from '../../components/CardCar';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderWrapper,
    TotalCars,
    Content
} from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            /> 
            <Header>
                <HeaderWrapper>
                    <Logo />
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderWrapper>
            </Header>
            <Content>
                <CardCar />
            </Content>
        </Container>
    );
}