import styled, { css } from "styled-components/native";

import { TypeThemeFontFamily, TypeThemeFontSize, TypeThemeColor } from "@theme/index";

interface TextProps {
    fontFamily: TypeThemeFontFamily
    fontSize: TypeThemeFontSize
    color: TypeThemeColor
    textAlign?: 'center' | 'justify' | 'left' | 'right'
}

export const Text = styled.Text<TextProps>`
    ${({ theme, color, fontFamily, fontSize, textAlign }) => css`
        font-family: ${theme.FONT_FAMILY[fontFamily]};
        font-size: ${theme.FONT_SIZE[fontSize]}px;
        color: ${theme.COLORS[color]};
        text-align: ${textAlign ? textAlign : 'center'};
    `};
`;