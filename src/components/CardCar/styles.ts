import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(126)}px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin-bottom: 16px;
`;

export const InformantionCar = styled.View`
    width: 35%;
`;
export const Manufacturer = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;
export const Model = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 16px;
`;

export const Rent = styled.View`
`;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;

export const Value = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.main};
`;

export const About = styled.View`
    flex-direction: row;

    justify-content: space-between;
`;

export const Type = styled.View`
    color: ${({ theme }) => theme.colors.text_detail};
`;

export const ImageCar = styled.Image`
    width: ${RFValue(160)}px;
    height: ${RFValue(92)}px;
`;