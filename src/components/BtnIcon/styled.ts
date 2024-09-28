import styled from "styled-components/native";

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { TypeThemeColor } from "@theme/index";

interface IconProps {
    color: TypeThemeColor;
}

export const Btn = styled(TouchableOpacity)`
    width: 10%;
`;

export const Icon = styled(Feather)<IconProps>`
    color: ${({ theme, color }) => theme.COLORS[color]};
    font-size: 24px;
`;