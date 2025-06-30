import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const SJokes = () => {
    const [joke, setJoke] = useState("Cargando chiste...");
    const  obtenerChiste =async()=>{
        try{
            const reponse = await fetch ('https://api.chucknorris.io/jokes/random');
            const data = await reponse.json();
            setJoke(data.value);
        }catch(error){
            setJoke("ocurrio un error");
            console.error(error);
        }
    };
    useEffect(()=>{
        obtenerChiste();
    },[])
    return(
    <View>
        <Text>chiste</Text>
        <Text>{joke}</Text>
        <Button
            title="Obtener nuevo chiste"
            onPress={obtenerChiste}
        />
        
    </View>
    );
};

export default SJokes;