import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { CardCarProps } from '../../components/CardCar'

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.header};
    height: ${RFValue(113)}px;
    justify-content: flex-end;
    padding: 28px 24px;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalCars = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled(
    FlatList as new (props: FlatListProps<CardCarProps>) => FlatList<CardCarProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: 16,
    }
})`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

