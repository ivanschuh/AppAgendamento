import React, { useState } from "react";
import { Container, CustomButton, CustomButtonText} from "./styles";

import Modal from '../../components/Modal'


export default () => {

    const [selectService, setSelectService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleService = (key) => {
        setSelectService(key);
        setShowModal(true)

        
    }

    return (
        <Container>
            <CustomButton onPress={()=>handleService(1)}><CustomButtonText>Preenchimento Ácido Hialurônico</CustomButtonText></CustomButton>
            <CustomButton onPress={()=>handleService(2)}><CustomButtonText>Botox</CustomButtonText></CustomButton>
            <CustomButton onPress={()=>handleService(3)}><CustomButtonText>Fios de PDO</CustomButtonText></CustomButton>
            <CustomButton onPress={()=>handleService(4)}><CustomButtonText>Limpeza de Pele</CustomButtonText></CustomButton>
            <Modal show={showModal}
                    setShow={setShowModal}
                    ></Modal>
        </Container>
    )
}