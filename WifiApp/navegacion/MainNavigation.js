import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import ScreenWifi from '../pantallas/ScreenWifi';
import ScreenLogin from '../pantallas/ScreenLogin';
import ScreenJokes from '../pantallas/ScreenJokes';
const Stack = createNativeStackNavigator();

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component={ScreenLogin}/>
                <Stack.Screen name = "Wifi" component={ScreenWifi}/>
                <Stack.Screen name = "Jokes" component={ScreenJokes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}