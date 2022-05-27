import React from 'react';
import EnergySvg from '../../assets/energy.svg';
import Audi from '../../assets/Audi.png';

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
    About
} from './styles';

export function CardCar() {
    return (
        <Container>
            <InformantionCar>
                <Manufacturer>
                    AUDI
                </Manufacturer>
                <Model>
                    RS 5 Coupé
                </Model>
                <About>
                    <Rent>
                        <Period>AO DIA</Period>
                        <Value>
                            R$ 120
                        </Value>
                    </Rent>
                    <Type>
                        <EnergySvg />
                    </Type>
                </About>
                
            </InformantionCar>
            <ImageCar source={Audi}/>
        </Container>
    );
}