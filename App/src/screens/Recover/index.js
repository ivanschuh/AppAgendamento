import React from 'react';
import { useContext, useState } from 'react';
import { Container, 
        InputArea,
        Titulo,
        ButtonArea,
        CustomButton,
        CustomButtonText
    } from './styles';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api'
import Allana from '../../assets/logoredonda.svg'
import SignInput from '../../components/SignInput';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');

    const handleBack = () =>{
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const handleEnv = () =>{

        if (emailField!= ''){
            navigation.reset({
                routes: [{name: 'SignIn'}]
            });
        }
        
    }

    return (
        <Container>
            <Allana width="100%" height="250"/>
            <InputArea>

                <Titulo>Recuperar Senha</Titulo>

                <SignInput 
                placeholder ="Digite seu e-mail" 
                value={emailField}
                onChangeText={t=>setEmailField(t)}
                />
                <ButtonArea>
                    <CustomButton
                    onPress={handleEnv}>
                        <CustomButtonText>Enviar</CustomButtonText>
                    </CustomButton>
                    <CustomButton
                    onPress={handleBack}>
                        <CustomButtonText>Voltar</CustomButtonText>
                    </CustomButton>
                </ButtonArea>
            </InputArea>            
        </Container>
    );
}