import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { api } from '../../services/api';

import { MyCarsButton } from '../../components/MyCarsButton';
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


export function Home() {
    const [Cars, setCars] = useState<CarDto[]>();

    const navigation = useNavigation();

    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onStart(_, ctx: any) {
            ctx.startX = positionX.value;
            ctx.startY = positionY.value;
        },
        onActive(event, ctx: any) {
            positionX.value = ctx.startX + event.translationX;
            positionY.value = ctx.startY + event.translationY;
        },
        onEnd() {
           positionY.value =  withSpring(0);
           positionX.value =  withSpring(0);
        }
    });

    const myCarsButtonsAnimation = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: positionX.value},
                {translateY: positionY.value}
            ]
        }
    })

    function handleMyCars() {
        navigation.navigate('MyCars')
    }

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
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[myCarsButtonsAnimation]}>
                    <MyCarsButton onPress={handleMyCars}/>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    );
}