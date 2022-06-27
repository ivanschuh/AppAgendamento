import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import ExpandIcon from '../assets/expand.svg'

const Modal = styled.Modal``;

const ModalArea = styled.View`
flex:1;
background-color: rgba(0,0,0,0.5);
justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #E19C91;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
    justify-content: center;
    align-itens: center;
`;

const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;    
`;

const DateArea = styled.View`
    background-color: white;
    border-radius: 10px;
    height: 150px;
    margin-top: 20px;
    padding: 10px 20px 40px 20px;    
`;

const ButtonAgenda = styled.TouchableOpacity`
    background-color: white;
    border-radius: 30px;
    padding: 10px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
`;

const ButtonAgendaText = styled.Text`
text-align: center;
font-size: 18px;
color: black;
`;

export default ({show, setShow, user, service}) => {

    const handleClose = () => {
        setShow(false);
    }

    const handleAgendar = () =>{
        
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType="slide">
                <ModalArea>
                    <ModalBody>
                        <CloseButton
                            onPress={handleClose}>
                                <ExpandIcon width="40" height="40" fill="#000000"></ExpandIcon>
                        </CloseButton>
                        <DateArea>
                        </DateArea>
                        <ButtonAgenda onPress={handleAgendar}>
                            <ButtonAgendaText>Agendar</ButtonAgendaText>
                        </ButtonAgenda>
                    </ModalBody>
                </ModalArea>
            </Modal>
    )
}