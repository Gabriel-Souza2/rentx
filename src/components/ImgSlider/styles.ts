import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';


interface ImgIndexProps {
    active: boolean;
}

export const Container = styled.View`
    width: 100%;
`;

export const ImgIndexes = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 24px;
    margin-bottom: 36px;
`;

export const ImgIndex = styled.View<ImgIndexProps>`
    width: 6px;
    height: 6px;
    background-color: ${({ theme, active}) => 
        active ? theme.colors.title : theme.colors.shape
    };

    border-radius: 3px;
    margin-left: 8px;
`;

export const ImageCarWapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;
    justify-content: center;
    align-items: center;
`;

export const CarImg = styled.Image`
    width: 280px;
    height: 132px;
`;
