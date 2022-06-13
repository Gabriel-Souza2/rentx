import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { addDays } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { Calander, DateData, MarkedDateProps } from '../../components/Calander';
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
import { generateInterval } from '../../components/Calander/generateInterval';
import { format } from 'date-fns';

interface RetalPeriod {
    startFormatted: string;
    endFormatted: string;
}

export function Scheduling() {
    const [lastSelectDate, setLastSelectDate] = useState<DateData>({} as DateData);
    const [markedDates, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RetalPeriod>({} as RetalPeriod);

    const theme = useTheme();

    const navigator = useNavigation<any>()

    function handleSchedulingDetails() {
        navigator.navigate('SchedulingDetails');
    }

    function handleBackButton() {
        navigator.goBack();
    }

    function handleChangeDate(date: DateData) {
        let start = !lastSelectDate.timestamp ? date : lastSelectDate;
        let end = date;

        if(start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectDate(end);

        const interval = generateInterval(start, end);
        setMarkedDate(interval);

        setRentalPeriod({
            startFormatted: format(addDays(new Date(start.timestamp), 1), 'dd/MM/yyyy'),
            endFormatted: format(addDays(new Date(end.timestamp), 1), 'dd/MM/yyyy')
        })
    }

    return (
        <Container>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <Header>
                <BackButton 
                    color={theme.colors.background_secondary} 
                    onPress={handleBackButton} 
                />
                <HeaderWrapper>
                    <Title>
                        Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
                    </Title>
                    <RentalPeriod>
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue selected={!!rentalPeriod.startFormatted}>
                                {rentalPeriod.startFormatted}
                            </DateValue>
                        </DateInfo>
                        <ArrowSvg />
                        <DateInfo>
                            <DateTitle>ATE</DateTitle>
                            <DateValue selected={!!rentalPeriod.endFormatted}>
                                {rentalPeriod.endFormatted}
                            </DateValue>
                        </DateInfo>
                    </RentalPeriod>
                </HeaderWrapper>
            </Header>
            <Content>
                <Calander 
                    markedDate={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>
            <Footer>
                <MainButton 
                    text="Confirmar" 
                    color={theme.colors.main} 
                    onPress={handleSchedulingDetails} 
                />
            </Footer>
        </Container>
    );
}