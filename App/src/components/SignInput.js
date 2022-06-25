import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width = 100%;
    height: 60px;
    background-color: #cdcdcc;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-itens: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: black;
    margin-left: 10px;
`;


export default ({placeholder, value, onChangeText, password}) => {

    return(
        <InputArea>
            <Input 
            placeholder = {placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
        </InputArea>
    );
}