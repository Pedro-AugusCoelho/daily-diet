import styled from "styled-components/native";

export const Container = styled.View`
    width: auto;
    height: auto;
    flex-direction: column;
    gap: 3px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: auto;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme}) => theme.COLORS.GRAY_500};
    border-radius: 10px;
    
    padding: 10px;
    margin-bottom: 10px;
    background-color: transparent;
`;