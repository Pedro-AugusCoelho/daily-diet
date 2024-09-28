import { TypeThemeFontFamily, TypeThemeFontSize, TypeThemeColor } from '@theme/index';
import * as S from './styled';

interface TextProps {
    text: string
    textAlign?: 'center' | 'justify' | 'left' | 'right'
    fontFamily: TypeThemeFontFamily
    fontSize: TypeThemeFontSize
    color: TypeThemeColor
}

export function Text({color, fontFamily, fontSize, textAlign, text}: TextProps) {
    return (
        <S.Text
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            textAlign={textAlign}
        >
            {text}
        </S.Text>
    ) 
}