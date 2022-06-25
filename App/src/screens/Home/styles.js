import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: white;
    flex: 1;
    justify-content: center;
    align-itens: center;    
`;

export const Titulo = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 100px;
    background-color: #E19C91;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 50px;
    margin-right: 50px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: black;
`;
