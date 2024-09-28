import { TypeThemeColor } from "@theme/index";
import styled from "styled-components/native";

interface Card50PercentProps {
    color: TypeThemeColor
}

interface HeaderProps {
    isGoodMeal: boolean
}

export const Container = styled.SafeAreaView `
    flex: 1;
`;

export const Header = styled.View<HeaderProps>`
    width: 100%;
    height: 200px;
    padding: 0 20px;
    
    background-color: ${( { theme, isGoodMeal } ) => isGoodMeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;

export const HeaderTop = styled.View`
    padding: 10px;
    padding-top: 20px;
`;

export const HeaderMid = styled.View`
    padding-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.View`
    flex: 1;
    padding: 0 20px;
    background-color: ${( { theme } ) => theme.COLORS.GRAY_700 };
    
    margin-top: -40px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;

export const View = styled.View`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
`;

export const Card = styled.View`
    width: 100%;
    
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${({ theme}) =>  theme.COLORS.GRAY_600};

    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const Area = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Card50Percent = styled.View<Card50PercentProps>`
    width: 48%;

    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${({ theme, color}) =>  theme.COLORS[color]};

    flex-direction: column;
    align-items: center;
    gap: 5px;
`;
