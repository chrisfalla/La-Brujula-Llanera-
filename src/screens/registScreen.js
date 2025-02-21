import React from "react";
import{ view, text, TextInput, TouchableOpacity, Image, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';

export default function RegisterScreen(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style ={styles.closeButton}>
            <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <text style={styles.title}>damian esta aqui trabajando tener paciencia en  lenteja</text>
        </View>
        

    )
}