import { SectionList, SectionListProps, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MealItem } from ".";

interface CircleProps {
    isDiet: boolean;
}

export const Container = styled.SafeAreaView `
    flex: 1;
    padding: 0 20px;
    background-color: ${( { theme } ) => theme.COLORS.GRAY_700 };
`;

export const Body = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 40px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const SectionView = styled.View`
    flex: 1;
    margin-top: 10px;
`;

export const SectionFeed = styled(SectionList as new () => SectionList<MealItem>)<SectionListProps<MealItem>>``;

export const HeaderSection = styled.View`
    margin: 10px 0;
`;

export const HeaderTitleSection = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.NUNITO_SANS_BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const ItemList = styled(TouchableOpacity)`
    ${({ theme }) => css`
        flex-direction: row;

        border-width: 1px;
        border-color: ${theme.COLORS.GRAY_400};
        border-radius: 10px;

        padding: 15px;
        margin-bottom: 10px;
    `};
`;

export const HourInfo = styled.Text`
    ${({ theme }) => css`
        padding-right: 5px;
        border-right-width: 1px;
        border-right-color: ${theme.COLORS.GRAY_400};
    `}; 
`;

export const ViewInfo = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleInfo = styled.Text`
    padding-left: 5px;
`;

export const CircleInfo = styled.View<CircleProps>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;