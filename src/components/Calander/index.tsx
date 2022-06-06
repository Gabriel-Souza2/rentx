import React from 'react';

import { Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container
} from './styles';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Hoje"
  };
  LocaleConfig.defaultLocale = 'pt-br';

export function Calander() {

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
            />
        </Container>
    );
}