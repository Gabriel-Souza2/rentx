import { eachDayOfInterval, format, addDays } from 'date-fns';

import { DateData, MarkedDateProps } from '.'
import theme from '../../global/styles/theme';

export function generateInterval(start: DateData, end: DateData) {
    let interval: MarkedDateProps = {};

    eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
    .forEach( item  => {
        const date = format(addDays(item, 1), 'yyyy-MM-dd');

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date 
                    ? theme.colors.main : theme.colors.main_light,

                textColor: start.dateString === date || end.dateString === date 
                    ? theme.colors.main_light : theme.colors.main,
            }
        }
    });
    return interval;
}