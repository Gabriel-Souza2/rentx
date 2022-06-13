import React from 'react';
import { SvgProps } from 'react-native-svg';

import Acceleration from '../assets/acceleration.svg';
import Exchange from '../assets/exchange.svg';
import Force from '../assets/force.svg';
import Gasoline from '../assets/gasoline.svg';
import People from '../assets/people.svg';
import Speed from '../assets/speed.svg';
import Energy from '../assets/energy.svg';
import Hybrid from '../assets/hybrid.svg';


export function getAccessoryIcon(accesory: string): React.FC<SvgProps> {

    switch (accesory) {
        case 'speed': 
            return Speed;
        case 'acceleration':
            return Acceleration;
        case 'turning_diameter':
            return Force;
        case 'gasoline_motor':
            return Gasoline;
        case 'electric_motor':
            return Energy;
        case 'hibrid_motor':
            return Hybrid;
        case 'exchange':
            return Exchange;
        case 'seats':
            return People
        default:
            return ;
    }
        


}