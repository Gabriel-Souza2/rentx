import React from 'react';

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

import { CarDto } from '../dtos/CarDto';


export type ScreenParamList = {
    Home: undefined,
    Details: { 
        car: CarDto
    };
    Scheduling: {
        car: CarDto
    },
    SchedulingDetails: {
        car: CarDto,
        period: {
            start: string,
            end: string,
            interval: string[]
        },

    },
    SchedulingComplete: undefined

}


const { Navigator, Screen } = createNativeStackNavigator<ScreenParamList>()

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Details"
                component={Details}
            />
            <Screen 
                name="Scheduling"
                component={Scheduling}
            />
            <Screen 
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
            <Screen 
                name="SchedulingComplete"
                component={SchedulingComplete}
            />
        </Navigator>
    );
}