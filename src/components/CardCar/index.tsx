import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

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

interface Props {
    manufacturer: string;
    model: string;
    rent: {
        period: string;
        value: number;
    }
    thumbnail: string;
}

export interface CardCarProps extends RectButtonProps{
    data: Props;
}

export function CardCar({ data, onPress, ...rest}: CardCarProps) {
    const theme = useTheme();

    return (
        <Container onPress={onPress} {...rest}>
            <InformantionCar>
                <Manufacturer>
                    { data.manufacturer }
                </Manufacturer>
                <Model>
                    { data.model }
                </Model>
                <About>
                    <Rent>
                        <Period>
                            { data.rent.period }
                        </Period>
                        <Value>
                            { data.rent.value}
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