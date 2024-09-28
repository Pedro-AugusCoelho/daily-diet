import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons';
import theme from "@theme/index";

interface LightBtnProps {
    isLightTheme?: boolean
}

export const BtnWithIcon = styled(TouchableOpacity)<LightBtnProps>`
    width: 100%;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, isLightTheme }) => isLightTheme ? 'transparent' : theme.COLORS.GRAY_200};
    margin-top: 10px;
    padding: 10px;

    border-width: 1px;
    border-color: ${({ theme, isLightTheme }) => isLightTheme ? theme.COLORS.GRAY_100 : 'transparent' };
    border-radius: 10px;
`;

export const Title = styled.Text<LightBtnProps>`
    ${({ theme, isLightTheme }) => css`
        font-family: ${theme.FONT_FAMILY.NUNITO_SANS_BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${isLightTheme ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    `};
`;

export const IconNew = styled(Feather).attrs(() => ({
    size: 18
}))``;