import styled from "styled-components/native";

import { MaskedTextInput } from "react-native-mask-text";

export const Container = styled.View`
    width: auto;
    height: auto;
    flex-direction: column;
    gap: 3px;
`;

export const Input = styled(MaskedTextInput)`
    width: 100%;
    height: 48px;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme}) => theme.COLORS.GRAY_500};
    border-radius: 10px;
    
    padding: 10px;
    margin-bottom: 10px;
    background-color: transparent;
`;