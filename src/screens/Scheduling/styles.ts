import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DataValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(325)}px;

    background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderWrapper = styled.View`
    width: 100%;
    height: 100%;

    justify-content: flex-end;
    padding: 25px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};
`;

export const RentalPeriod = styled.View`
    margin: 32px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const DateInfo = styled.View`
    width: ${RFValue(104)}px;
`;
export const DateTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
`;
export const DateValue = styled.Text<DataValueProps>`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.shape};

    ${({ selected, theme }) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${({ theme }) => theme.colors.text};
        padding-bottom: 5px;
    `};
`;