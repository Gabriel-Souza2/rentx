import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCars';

import { CarDto } from '../dtos/CarDto';


export type ScreenParamList = {
    Splash: undefined,
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
    SchedulingComplete: undefined,
    MyCars: undefined

}


const { Navigator, Screen } = createNativeStackNavigator<ScreenParamList>()

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}
        initialRouteName="Splash"
        >
            <Screen 
                name="Splash"
                component={Splash}
            />
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
            <Screen 
                name="MyCars"
                component={MyCars}
            />
        </Navigator>
    );
}