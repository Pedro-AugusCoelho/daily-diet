import { TextInputProps } from 'react-native';

import * as S from './styled';

import { Text } from '@components/Text';

interface InputProps extends TextInputProps {
    title: string;
}

export function Input ({title, ...rest}: InputProps) {
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
                {...rest}
            />
        </S.Container>
    )
}