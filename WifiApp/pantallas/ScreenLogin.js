import React from "react";
import { View, Text, TextInput } from 'react-native';

const Login=( {navigation})=>{
    return(
        
        <View >
            <Text>Iniciar sesion</Text>
            <TextInput
                
                placeholder ="Usuario"
                
            />
            <TextInput
                placeholder="Contraseña"
            />
        </View>
    );


};
export default Login;