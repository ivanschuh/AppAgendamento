import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, CustomButton, CustomButtonText } from "./styles";

import Api from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default () => {

    const navigation = useNavigation();

    const handleLogout = async() => {

        AsyncStorage.removeItem('token')
        
            navigation.reset({
                routes: [{ name: "SignIn" }],
              });

      };
    return (
        <Container>
            <CustomButton onPress={handleLogout}><CustomButtonText>Logout</CustomButtonText></CustomButton>
        </Container>
    )
}