import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${RFValue(106)}px;
    height: ${RFValue(92)}px;
    background-color: ${({ theme }) => theme.colors.background_primary};
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

export const Information = styled.Text`
    margin-top: 14px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text}
`;