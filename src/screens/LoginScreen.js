import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginFrom from '../components/LoginFrom';
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')}
            style={styles.logo}/>
            <Text style={styles.title}> Inicia sesión con tu cuenta</Text>
            <LoginFrom/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
        padding: 10,
    },
    logo:{
        width: 300, // Ajusta el ancho de la imagen
        height: 300, // Ajusta la altura de la imagen
        marginBottom: 0, // Espacio entre la imagen y el texto
        resizeMode: 'contain'

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        
      },
    
  
});

export default LoginScreen;