import { TouchableOpacityProps } from 'react-native';
import * as S from './styled';

import { Feather } from '@expo/vector-icons';
import theme, { TypeThemeColor } from '@theme/index';

type IconName = keyof typeof Feather.glyphMap

interface BtnWithIconProps extends TouchableOpacityProps {
    name: IconName;
    color: TypeThemeColor;
}

export function BtnIcon({name, color, ...rest}: BtnWithIconProps) {
    return (
        <S.Btn {...rest}>
            <S.Icon
                name={name}
                color={color}
            />
        </S.Btn>
    )
}