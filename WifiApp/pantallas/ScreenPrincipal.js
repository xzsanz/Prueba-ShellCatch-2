import React from "react";
import { View, Button, StyleSheet } from 'react-native';

const ScreenPrincipal = ({navigation}) =>{
    return(
        <View>
            <Button 
            title="Ir a login"
            onPress={() => navigation.navigate('Login')} 
            />
            <Button
            title="Ir a WifiScanner"
            onPress={() => navigation.navigate('Wifi')}
            />
            <Button
            title="Ir a los chistes"
            onPress={() => navigation.navigate('Jokes')}
            />
        </View>
    )
}
export default ScreenPrincipal;