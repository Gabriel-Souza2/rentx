import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled(BorderlessButton)`
    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 16px;
`;

export const Icon = styled(Feather)``;