import React from 'react';

import { 
    Calendar as CustomCalendar, 
    LocaleConfig,
    DateData,
} from 'react-native-calendars';
import { ptBr } from './localeConfig';


import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container
} from './styles';

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
    [date: string]: {
        startingDay?: boolean;
        endingDay?: boolean;
        color: string;
        textColor: string;
    }
}

interface CalenderProps {
    markedDate: MarkedDateProps;
    onDayPress: (date: DateData) => void;

}

function Calander({ markedDate, onDayPress }: CalenderProps) {

    const theme = useTheme();

    return (
        <Container>
            <CustomCalendar 
                renderArrow={(direction) => (
                    <Feather 
                        size={RFValue(24)}
                        color={theme.colors.text}
                        name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    />
                )}

                headerStyle={{
                    backgroundColor: theme.colors.background_secondary,
                    borderBottomWidth: 0.5,
                    borderColor: theme.colors.text_detail,
                    paddingBottom: 10,
            
                }}

                theme={{
                    textDayFontFamily: theme.fonts.primary_400,
                    textDayFontSize: RFValue(16), 
                    textDayHeaderFontFamily: theme.fonts.primary_500,
                    textDayHeaderFontSize: RFValue(10),
                    textMonthFontFamily: theme.fonts.secondary_600,
                    textMonthFontSize: RFValue(20),
                    monthTextColor: theme.colors.title,
                    arrowStyle: {
                        marginHorizontal: -15
                    }
                }}

                firstDay={1}
                minDate={new Date().toDateString()}

                markingType='period'
                markedDates={markedDate}
                onDayPress={onDayPress}
            />
        </Container>
    );
}

export  {
    Calander,
    DateData,
    MarkedDateProps
 }