import React from 'react';
import { FlatList, StatusBar } from 'react-native';

import { CardCar, CardCarProps } from '../../components/CardCar';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderWrapper,
    TotalCars,
    Content
} from './styles';

export function Home() {
    const data = [
        {
            data: {
                manufacturer: 'Audi',
                model: 'RS 5 Coupé',
                rent: {
                    period: 'Ao dia',
                    value: 120,
                },
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/rentx-c622e.appspot.com/o/Audi.png?alt=media&token=b61e714a-82fb-4c9f-bd4c-170d1a3620d1',
            }
        },
        
    ]
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
            <Content 
                data={data}
                keyExtractor={item => item.data.manufacturer}
                renderItem={ ({ item }) => <CardCar data={item.data} /> }                
            />
        </Container>
    );
}