import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')}
            style={styles.logo}/>
            <Text style={styles.title}> Inicia sesión con tu cuenta</Text>
            <LoginForm/>
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
        width: 250,
        height: 250,
        marginBottom: 0,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default LoginScreen;