import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;
    height: ${RFValue(80)}px;
`;

export const LogoImage = styled.View`
    width: ${RFValue(60)}px;
    height: ${RFValue(38)}px;
`;

export const ImgLogo = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const ProfileImage = styled.View`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;