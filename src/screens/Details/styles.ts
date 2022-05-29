import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 16px;
`;

export const ImgSliderContainer = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Information = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
`;
export const Content = styled.ScrollView.attrs({
    showVerticalScrollIndicator: false
})`
    flex: 1;
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
    padding: 0 13px;
`;

export const DescriptionWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-top:15px;
    line-height: ${RFValue(25)}px;
    text-align: justify;
`;

export const Footer = styled.View`
    width: 100%;
    height: ${RFValue(111)}px;
    background-color: ${({ theme }) => theme.colors.background_primary};
    justify-content: center;
    align-items: center;
`;