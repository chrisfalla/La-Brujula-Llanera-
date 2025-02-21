import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')}
                style={styles.logo} />
            <Text style={styles.title}> Inicia sesión con tu cuenta</Text>
<<<<<<< HEAD
            <LoginFrom />
=======
            <LoginForm/>
>>>>>>> 1779f5bd42ea923f562689ce098ebd0c7f1ff4c2
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
<<<<<<< HEAD
    logo: {
        width: 300, // Ajusta el ancho de la imagen
        height: 300, // Ajusta la altura de la imagen
        marginBottom: 0, // Espacio entre la imagen y el texto
=======
    logo:{
        width: 250,
        height: 250,
        marginBottom: 0,
>>>>>>> 1779f5bd42ea923f562689ce098ebd0c7f1ff4c2
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
<<<<<<< HEAD

    },


=======
    },
>>>>>>> 1779f5bd42ea923f562689ce098ebd0c7f1ff4c2
});

export default LoginScreen;