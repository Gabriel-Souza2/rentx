import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImgSlider } from '../../components/ImgSlider';
import { Acessory } from '../../components/Acessory';

import Acceleration from '../../assets/acceleration.svg';
import Exchange from '../../assets/exchange.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import People from '../../assets/people.svg';
import Speed from '../../assets/speed.svg';

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
    Acessories,
    DescriptionWrapper,
    Description,
    Footer
} from './styles';
import { MainButton } from '../../components/MainButton';

export function Details() {

    const theme = useTheme();

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
            <Content>
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

                <Acessories>
                    <Acessory text="380 Km/h" Icon={Speed}/>
                    <Acessory text="3.2s" Icon={Acceleration}/>
                    <Acessory text="800 HP" Icon={Force}/>
                    <Acessory text="Gasolina" Icon={Gasoline}/>
                    <Acessory text="Auto" Icon={Exchange}/>
                    <Acessory text="2 pessoas" Icon={People}/>
                </Acessories>

                <DescriptionWrapper>
                    <Description>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça 
                        Real Maestranza de Sevilla. 
                        É um belíssimo carro para quem gosta de acelerar.
                    </Description>
                </DescriptionWrapper>
                <Footer>
                    <MainButton 
                        text="Escolher período do aluguel" 
                        onPress={() => {}}
                        color={theme.colors.main}
                    />
                </Footer>
            </Content>

        </Container>
    );
}