import React from 'react';

import { Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

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
                        size={24}
                        color={theme.colors.text}
                        name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    />
                )}
            />
        </Container>
    );
}