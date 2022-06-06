import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: ${RFValue(327)}px;
    height: 56px;
    background-color: ${({ color }) => color};

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
`;