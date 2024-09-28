import styled, { css } from "styled-components/native";

interface CardProps {
    isGoodMeal: boolean
}

export const Card = styled.View<CardProps>`
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    background-color: ${({ theme, isGoodMeal }) => isGoodMeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;

export const HeaderCard = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const BodyCard = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.NUNITO_SANS_BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`;