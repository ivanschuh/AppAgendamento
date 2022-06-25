import React, { useContext, useState } from "react";
import {
  Container,
  InputArea,
  Titulo,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../../contexts/UserContext";
import Api from "../../Api";
import Allana from "../../assets/logoredonda.svg";
import SignInput from "../../components/SignInput";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignUp = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  const handleRecover = () => {
    navigation.reset({
      routes: [{ name: "Recover" }],
    });
  };

  const handleLogin = async () => {
    if (emailField != "" && passwordField != "") {
      let json = await Api.signIn(emailField, passwordField);
      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert(json.msg);
      }
    } else {
      alert("Preencha os campos!");
    }
  };

  return (
    <Container>
      <Allana width="100%" height="250" />
      <Titulo>Login</Titulo>
      <InputArea>
        <SignInput
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />
        <CustomButton onPress={handleLogin}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleRecover}>
        <SignMessageButtonText>Esqueceu a senha?</SignMessageButtonText>
        <SignMessageButtonTextBold>Recupere aqui!</SignMessageButtonTextBold>
      </SignMessageButton>
      <SignMessageButton onPress={handleSignUp}>
        <SignMessageButtonText>Não possui conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
