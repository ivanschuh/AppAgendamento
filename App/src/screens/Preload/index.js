import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";
import Api from "../../Api";
import Allana from "../../assets/logoredonda.svg";

export default () => {

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let res = await Api.checkToken(token);
        console.log(res.token)
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  });

  return (
    <Container>
      <Allana width="100%" height="250" />
      <LoadingIcon size="large" color="black" />
    </Container>
  );
};
