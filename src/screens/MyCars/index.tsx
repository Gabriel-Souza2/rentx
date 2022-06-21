import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { CardCar } from '../../components/CardCar';

import { CarDto } from '../../dtos/CarDto';
import { api } from '../../services/api';


import {
    Container,
    Header,
    HeaderWrapper,
    Title,
    SubTitle,
    Content,
    ActivityIndicatorWrapper,
    SchedulesWrapper,
    SchedulesText,
    SchedulesTotal,
    CarsList,
    CarCardWrapper,
    CardFooter,
    CardFooterTitle,
    CardFooterPeriod,
    CardFooterDate

} from './styles';

export interface CarProps {
    user_id: string,
    car: CarDto,
    startDate: string,
    endDate: string,
    id: string
}

export function MyCars() {
    const [cars, setCars] = useState<CarProps[]>([] as CarProps[]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const theme = useTheme();

    const navigation = useNavigation();

    function handleBackButton() {
        navigation.goBack();
    }

    function handleCarDetails(car: CarDto) {
        navigation.navigate('Details', {car: car});
    }


    useEffect(() => {
        async function fetchCars() {
            try{
                const resp = await api.get('/schedules_byuser?user_id=1');
                setCars(resp.data);
                
            } catch(error) {
                console.log(error)
            }
        }

        fetchCars();
        setIsLoading(false);
    }, []);

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
                        Seus agendamentos, estão aqui.
                    </Title>
                    <SubTitle>
                        Conforto, segurança e praticidade.
                    </SubTitle>
                </HeaderWrapper>
            </Header>
            {
                isLoading ? 
                    <ActivityIndicatorWrapper>
                        <ActivityIndicator color={theme.colors.header}/>
                    </ActivityIndicatorWrapper>
                :
                    <Content>
                    <SchedulesWrapper>
                        <SchedulesText>
                            Agendamentos Feitos
                        </SchedulesText>
                        <SchedulesTotal>
                            {cars.length}
                        </SchedulesTotal>
                    </SchedulesWrapper>
                    <CarsList 
                        data={cars}
                        keyExtractor={item => item.id}
                        renderItem={ ({ item }) => 
                            <CarCardWrapper>
                                <CardCar data={item.car} onPress={() => handleCarDetails(item.car)} /> 
                                <CardFooter>
                                    <CardFooterTitle>Periodo</CardFooterTitle>
                                    <CardFooterPeriod>
                                        <CardFooterDate>18/06/2021</CardFooterDate>
                                        <AntDesign 
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.text_detail}
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <CardFooterDate>18/06/2021</CardFooterDate>
                                    </CardFooterPeriod>
                                </CardFooter>
                            </CarCardWrapper>
                        }   
                    />
                </Content>
            }
        </Container>
    );
}