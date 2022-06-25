import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: #E19C91;
    flex: 1;
    justify-content: center;
    align-itens: center;    
`;

export const InputArea = styled.View`
    width: 100%
    padding: 40px;
    
`;

export const Titulo = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
`;


export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #cdcdcc;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: black;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: black;
    `;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: black;
    font-weight: bold;
    margin-left: 5px;
`;