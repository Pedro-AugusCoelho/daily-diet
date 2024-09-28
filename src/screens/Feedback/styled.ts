import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView `
    flex: 1;
    padding: 0 20px;
    background-color: ${( { theme } ) => theme.COLORS.GRAY_700 };

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerImg = styled.View`
    margin-top: 20px;
    width: 224px;
    height: 288px;
`;

export const Img = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const BtnSubmit = styled(TouchableOpacity)`
    width: 70%;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    margin-top: 20px;
`;