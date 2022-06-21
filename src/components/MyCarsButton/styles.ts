import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: 60px;
    height: 60px;

    background-color: ${({ theme }) => theme.colors.main};

    border-radius: 30px;

    position: absolute;

    bottom: 13px;
    right: 22px;

    justify-content: center;
    align-items: center;
`;

