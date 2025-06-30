import React from "react";
import { View, Text, TextInput, Button } from 'react-native';

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
            <Button title="Iniciar Sesion"/>
        </View>
    );


};
export default Login;