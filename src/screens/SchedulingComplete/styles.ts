import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Message = styled.Text`
    text-align: center;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_detail};

    margin-bottom: 80px;
`;