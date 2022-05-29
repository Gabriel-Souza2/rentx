import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImgSlider } from '../../components/ImgSlider';

import {
    Container,
    Header,
    ImgSliderContainer,
    Information,
    Type,
    Manufacturer,
    Model,
    Price,
    Period,
    Value,
} from './styles';

export function Details() {
    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <BackButton onPress={() => {}} />
            </Header>
            <ImgSliderContainer>
                <ImgSlider urls={['https://firebasestorage.googleapis.com/v0/b/rentx-c622e.appspot.com/o/Lambo.png?alt=media&token=0dc12ca9-3976-45f9-9ea6-898fb2a3114b']} />
            </ImgSliderContainer>
            <Information>
                <Type>
                    <Manufacturer>
                        Lamborghini
                    </Manufacturer>
                    <Model>
                        Huracan
                    </Model>
                </Type>
                <Price>
                    <Period>
                        Ao dia
                    </Period>
                    <Value>
                        R$ 580
                    </Value>
                </Price>
            </Information>
        </Container>
    );
}