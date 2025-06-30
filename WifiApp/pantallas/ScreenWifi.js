import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import wifiManager from "react-native-wifi-reborn";

const Wifi=( {navigation})=>{
    const EscanearWifi =async()=>{
        try{
            const wifi = await wifiManager.loadWifiList();
            console.log('Redes wifi encontradas',wifi)
            setWifiList(wifi);
        }catch(error){
            console.log("Error al cargan los wifi",error);
        }
    }
    return(
        
        <View >
            <Button title="Escanear wifi" onPress={EscanearWifi}/>
            <Text>Wifi disponibles</Text>
            
        </View>
    );

};
export default Wifi;