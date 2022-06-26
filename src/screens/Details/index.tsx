import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


import { BackButton } from '../../components/BackButton';
import { ImgSlider } from '../../components/ImgSlider';
import { Accessory } from '../../components/Accessory';
import { MainButton } from '../../components/MainButton';
import { DetailsRouteParams } from '../../routes/navigation';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    ImgSliderContainer,
    Content,
    Information,
    Type,
    Manufacturer,
    Model,
    Price,
    Period,
    Value,
    Accessories,
    DescriptionWrapper,
    Description,
    Footer
} from './styles';



export function Details() {

    const theme = useTheme();

    const navigator = useNavigation();

    const { params: {car} } = useRoute<DetailsRouteParams>();

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    });

    const headerAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP),
            opacity: interpolate(scrollY.value, [0, 100], [1, 0], Extrapolate.CLAMP)

        }
    })

    function handleHome() {
        navigator.goBack();
    }

    function handleScheduling() {
        navigator.navigate('Scheduling', { car });
    }
    
    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <BackButton onPress={handleHome} />
            </Header>
            <Animated.View style={[headerAnimation]}>
                <ImgSliderContainer>
                    <ImgSlider urls={car.photos} />
                </ImgSliderContainer>
            </Animated.View>
            <Animated.ScrollView 
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                style={{
                    marginTop: 15
                }}
            >
                <Information>
                    <Type>
                        <Manufacturer>
                            { car.brand }
                        </Manufacturer>
                        <Model>
                            { car.name }
                        </Model>
                    </Type>
                    <Price>
                        <Period>
                            { car.rent.period }
                        </Period>
                        <Value>
                            R$ { car.rent.price }
                        </Value>
                    </Price>
                </Information>

                <Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory
                                key={accessory.type}
                                text={accessory.name} 
                                Icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                    
                </Accessories>

                <DescriptionWrapper>
                    <Description>
                        { car.about }
                    </Description>
                </DescriptionWrapper>
            </Animated.ScrollView 
            
            >
            <Footer>
                <MainButton 
                    text="Escolher período do aluguel" 
                    onPress={handleScheduling}
                    color={theme.colors.main}
                />
                </Footer>
        </Container>
    );
}