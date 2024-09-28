import { TouchableOpacityProps } from 'react-native'
import * as S from './styled'

import { Feather } from '@expo/vector-icons';
import theme from '@theme/index';

type IconName = keyof typeof Feather.glyphMap

interface BtnWithIconProps extends TouchableOpacityProps {
    title: string;
    icon: IconName;
    isLightTheme?: boolean;
}

export function BtnWithIcon({title, icon, isLightTheme = false, ...rest}: BtnWithIconProps) {
    return(
        <S.BtnWithIcon {...rest} isLightTheme={isLightTheme}>
            <S.IconNew name={icon} color={isLightTheme ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE} />
            <S.Title isLightTheme={isLightTheme}>{title}</S.Title>
        </S.BtnWithIcon>
    )
}