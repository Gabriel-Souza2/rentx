import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarProps } from './';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;

    background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderWrapper = styled.View`
    width: 100%;
    height: 100%;

    justify-content: flex-end;
    padding-left: 25px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};

    margin-bottom: 18px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.background_secondary};

    margin-bottom: 34px;
`;

export const ActivityIndicatorWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    padding: 24px 16px 0px;
`;

export const SchedulesWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const SchedulesText = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
`;

export const SchedulesTotal = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
`;

export const CarsList = styled(
    FlatList as new (props: FlatListProps<CarProps>) => FlatList<CarProps>
).attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const CarCardWrapper = styled.View``;
export const CardFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 24px;

    background-color: ${({ theme }) => theme.colors.background_secondary};
    margin-top: -14px;
    margin-bottom: 15px;
`;
export const CardFooterTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
`;
export const CardFooterPeriod = styled.View`
    flex-direction: row;
`;
export const CardFooterDate = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.title};
`;