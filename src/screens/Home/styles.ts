import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const Content = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;