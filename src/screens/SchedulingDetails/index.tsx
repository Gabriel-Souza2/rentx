import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { SchedulingDetailsRouteParams } from '../../routes/navigation';


import { BackButton } from '../../components/BackButton';
import { ImgSlider } from '../../components/ImgSlider';
import { Accessory } from '../../components/Accessory';
import { Feather } from '@expo/vector-icons';

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
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RetanlPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from './styles';
import { MainButton } from '../../components/MainButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { api } from '../../services/api';

export function SchedulingDetails() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const theme = useTheme();

    const navigator = useNavigation();

    const { params: { car, period }} = useRoute<SchedulingDetailsRouteParams>();

    async function handleSchedulingComplete() {
        setIsLoading(true);

        const sheduleByCar = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = [
                ...sheduleByCar.data.unavailable_dates,
                ...period.interval
            ]

            api.put(`/schedules_bycars/${car.id}`, {
                id: car.id,
                unavailable_dates
            })
            .then(() => { navigator.navigate('SchedulingComplete') })
            .catch(() => Alert.alert("Erro", "Não foi possivel confirmar o agendamento"));
    }

    function handleBackButton() {
        navigator.goBack();
    }

    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <BackButton onPress={handleBackButton} />
            </Header>
            <ImgSliderContainer>
                <ImgSlider urls={car.photos} />
            </ImgSliderContainer>
            <Content>
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
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name='calendar' 
                            size={RFValue(20)}
                            color={theme.colors.background_secondary}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{period.start}</DateValue>
                    </DateInfo>
                    <Feather 
                        name="chevron-right" 
                        size={RFValue(24)}
                        color={theme.colors.text_detail}
                    />
                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValue>{ period.end }</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>Total</RentalPriceLabel>
                    <RetanlPriceDetails>
                        <RentalPriceQuota> R$ { car.rent.price } x{period.interval.length} diarias</RentalPriceQuota>
                        <RentalPriceTotal> R$ { car.rent.price * period.interval.length }</RentalPriceTotal>
                    </RetanlPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <MainButton 
                    text="Alugar Agora" 
                    onPress={handleSchedulingComplete}
                    color={theme.colors.success}
                    activeIndicator={isLoading}
                />
            </Footer>
        </Container>
    );
}