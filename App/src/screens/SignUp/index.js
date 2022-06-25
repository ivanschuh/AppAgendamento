import React from "react";
import { useContext, useState } from "react";
import {
  Container,
  Titulo,
  InputArea,
  ButtonArea,
  CustomButton,
  CustomButtonText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../../contexts/UserContext";
import Api from "../../Api";
import Allana from "../../assets/logoredonda.svg";
import SignInput from "../../components/SignInput";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmpasswordField, setConfirmPasswordField] = useState("");
  const [nameField, setNameField] = useState("");

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  const handleCadastro = async () => {
    if (
      emailField != "" &&
      passwordField != "" &&
      nameField != "" &&
      confirmpasswordField != ""
    ) {
        let res = await Api.signUp(nameField, emailField, passwordField, confirmpasswordField);

        if (res.token) {
          await AsyncStorage.setItem("token", res.token);

          navigation.reset({
            routes: [{ name: "SignIn" }],
          });
        } else {
          alert(res.msg);
          navigation.reset({
            routes: [{ name: "SignIn" }],
          });
        }
    } else {
      alert("Preencha os campos!");
    }
  };

  return (
    <Container>
      <Allana width="100%" height="250" />
      <Titulo>Realize seu Cadastro</Titulo>
      <InputArea>
        <SignInput
          value={nameField}
          onChangeText={(t) => setNameField(t)}
          placeholder="Digite seu nome"
        />
        <SignInput
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          placeholder="Digite seu e-mail"
        />
        <SignInput
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
          placeholder="Digite sua senha"
        />
        <SignInput
          value={confirmpasswordField}
          onChangeText={(t) => setConfirmPasswordField(t)}
          password={true}
          placeholder="Confirme sua senha"
        />
        <ButtonArea>
          <CustomButton onPress={handleCadastro}>
            <CustomButtonText>Cadastrar</CustomButtonText>
          </CustomButton>
          <CustomButton onPress={handleBack}>
            <CustomButtonText>Voltar</CustomButtonText>
          </CustomButton>
        </ButtonArea>
      </InputArea>
    </Container>
  );
};
