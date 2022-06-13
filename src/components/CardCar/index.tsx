import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { CarDto } from '../../dtos/CarDto';

import EnergySvg from '../../assets/energy.svg';

import {
    Container,
    InformantionCar,
    Manufacturer,
    Model,
    Period,
    Value,
    ImageCar,
    Rent,
    Type,
    About,
} from './styles';


export interface CardCarProps extends RectButtonProps{
    data: CarDto;
}

export function CardCar({ data, onPress, ...rest}: CardCarProps) {
    const theme = useTheme();

    return (
        <Container onPress={onPress} {...rest}>
            <InformantionCar>
                <Manufacturer>
                    { data.brand}
                </Manufacturer>
                <Model>
                    { data.name }
                </Model>
                <About>
                    <Rent>
                        <Period>
                            { data.rent.period }
                        </Period>
                        <Value>
                            R$ { data.rent.price}
                        </Value>
                    </Rent>
                    <Type>
                        <EnergySvg  color={theme.colors.text_detail}/>
                    </Type>
                </About>
                
            </InformantionCar>
            <ImageCar 
                source={{uri: data.thumbnail }}
                resizeMode='contain'
                />
        </Container>
    );
}