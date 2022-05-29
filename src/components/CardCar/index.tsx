import React from 'react';
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

export interface CardCarProps {
    data: Props;
}

export function CardCar({ data }: CardCarProps) {
    const theme = useTheme();

    return (
        <Container>
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