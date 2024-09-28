import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

interface BtnCheckboxProps {
    type: 'positive' | 'negative'
    isDiet: Boolean | null
}

interface CircleProps {
    type: 'positive' | 'negative'
}


export const Container = styled.SafeAreaView `
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 130px;
    padding: 26.5px 20px;
    
    background-color: ${( { theme } ) => theme.COLORS.GRAY_500 };

    flex-direction: row;
`;

export const HeaderView = styled.View`
    flex: 1;
`;

export const Body = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${( { theme } ) => theme.COLORS.GRAY_700 };
    
    margin-top: -40px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;

export const SizeController = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HalfWidthView = styled.View`
  width: 49%;
`;

export const BtnCheckbox = styled(TouchableOpacity)<BtnCheckboxProps>`
    width: 100%;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
    border-width: 2px;
    border-color: transparent;
    border-radius: 5px;
    
    ${({theme, isDiet, type }) => css`
        border-color: ${ isDiet && type === 'positive' ? theme.COLORS.GREEN_DARK : isDiet === false && type === 'negative' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600 };
        background-color: ${ isDiet && type === 'positive' ? theme.COLORS.GREEN_LIGHT : isDiet === false && type === 'negative' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600 };
    `}
`;

export const CircleCheckbox = styled.View<CircleProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;

    background-color: ${({ theme, type }) => type === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;

export const Footer = styled.View`
    padding: 20px;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${( { theme } ) => theme.COLORS.GRAY_700 };
`;

export const BtnSubmit = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
`;