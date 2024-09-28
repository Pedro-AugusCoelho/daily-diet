import { Text } from '@components/Text';
import * as S from './styled'

import { MaskedTextInputProps } from "react-native-mask-text";
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps, MaskedTextInputProps {
    title: string;
    mask?: string;
    value: string;
    onChangeText: (text: string) => void;
    style?: any;
}

export function InputWithMask ({ title, mask, value, onChangeText, ...rest }: InputProps) {
    return (
        <S.Container>
            <Text
                textAlign='left'
                color='GRAY_200'
                fontFamily='NUNITO_SANS_BOLD'
                fontSize='SM'
                text={title}
            />
            
            <S.Input
                mask={mask}
                value={value}
                onChangeText={(text, rawText) => { mask ? onChangeText(text) : onChangeText(rawText)}}
                {...rest}
            />
        </S.Container>
    )
}