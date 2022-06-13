import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { api } from '../../services/api';

import { CardCar } from '../../components/CardCar';
import { CarDto } from '../../dtos/CarDto';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderWrapper,
    TotalCars,
    Content
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [Cars, setCars] = useState<CarDto[]>();

    const navigation = useNavigation();

    useEffect(() => {
        async function fetchCars() {
            try{
                const resp = await api.get('/cars');
                setCars(resp.data);
                
            } catch(error) {
                console.log(error)
            }
        }

        fetchCars();
    }, []);

    function handleCarDetails(car: CarDto) {
        navigation.navigate('Details', {car: car});
    }

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
                data={Cars}
                keyExtractor={item => item.id}
                renderItem={ ({ item }) => 
                    <CardCar data={item} onPress={() => handleCarDetails(item)} /> 
                }                
            />
        </Container>
    );
}