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
            <CustomButton><CustomButtonText>Botox</CustomButtonText></CustomButton>
            <CustomButton><CustomButtonText>Fios de PDO</CustomButtonText></CustomButton>
            <CustomButton><CustomButtonText>Limpeza de Pele</CustomButtonText></CustomButton>
            <Modal show={showModal}
                    setShow={setShowModal}
                    ></Modal>
        </Container>
    )
}