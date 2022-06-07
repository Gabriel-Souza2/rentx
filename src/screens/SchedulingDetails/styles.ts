import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View``;

export const ImgSliderContainer = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Information = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 16px;
`;
export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 5px;
    padding: 0 13px;
`;

export const Type = styled.View``;

export const Manufacturer = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
`;
export const Model = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.View``;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
`;
export const Value = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.main};
`;

export const Acessories = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const RentalPeriod = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 16px;

    padding-bottom: 16px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    
`;

export const CalendarIcon = styled.View`
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.main};
    align-items: center;
    justify-content: center;
`;
export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    text-transform: uppercase;
`;

export const DateValue = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const RentalPrice = styled.View`
    margin-bottom: 16px;
`;
export const RentalPriceLabel = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    text-transform: uppercase;
    margin-bottom: 8px;
`;
export const RetanlPriceDetails = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const RentalPriceQuota = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_500};
`;
export const RentalPriceTotal = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.success};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Footer = styled.View`
    width: 100%;
    height: 111px;
    background-color: ${({ theme }) => theme.colors.background_primary};
    justify-content: center;
    align-items: center;
    padding: 0 24px;
`;


