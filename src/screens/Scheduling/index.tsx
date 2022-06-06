import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Calander } from '../../components/Calander';
import { MainButton } from '../../components/MainButton';



import ArrowSvg from '../../assets/arrow.svg';

import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    HeaderWrapper,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer

} from './styles';

export function Scheduling() {

    const theme = useTheme();

    return (
        <Container>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <Header>
                <BackButton color={theme.colors.background_secondary} />
                <HeaderWrapper>
                    <Title>
                        Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
                    </Title>
                    <RentalPeriod>
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue selected={true}>18/06/2021</DateValue>
                        </DateInfo>
                        <ArrowSvg />
                        <DateInfo>
                            <DateTitle>ATE</DateTitle>
                            <DateValue selected={true}>18/06/2021</DateValue>
                        </DateInfo>
                    </RentalPeriod>
                </HeaderWrapper>
            </Header>
            <Content>
                <Calander />
            </Content>
            <Footer>
                <MainButton 
                    text="Confirmar" 
                    color={theme.colors.main} 
                    onPress={() => {}} 
                />
            </Footer>
        </Container>
    );
}