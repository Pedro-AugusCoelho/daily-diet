import theme from "@theme/index";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Loading = styled(ActivityIndicator).attrs(({theme}) => ({
    size: "large",
    color: theme.COLORS.GREEN_DARK
}))``