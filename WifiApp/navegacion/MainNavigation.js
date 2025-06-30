import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenWifi from '../pantallas/ScreenWifi';
import ScreenLogin from '../pantallas/ScreenLogin';
import ScreenJokes from '../pantallas/ScreenJokes';
import ScreenPrincipal from "../pantallas/ScreenPrincipal";

const Stack = createNativeStackNavigator();

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Inicial">
                <Stack.Screen name = "Inicial" component={ScreenPrincipal}/>
                <Stack.Screen name = "Login" component={ScreenLogin}/>
                <Stack.Screen name = "Wifi" component={ScreenWifi}/>
                <Stack.Screen name = "Jokes" component={ScreenJokes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}