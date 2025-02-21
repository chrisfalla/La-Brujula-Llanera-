import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity, Image } from 'react-native';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' && password === '') {
            Alert.alert('Ha iniciado sesión!');
        } else {
            Alert.alert('Verifique el correo o la contraseña');
        }
    };

    const handleForgotPassword = () => {
        Alert.alert('pantalla de recuperación de contraseña');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder='ejemplo@ejemplo.com'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.title}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder=''
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>¿Olvidó su Contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>

                <Text style={styles.loginButtonButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
                <Image source={require('../../assets/icon-google.png')} style={styles.iconGoogle}></Image>
                <Text style={styles.googleButtonText}>Iniciar con Google</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.createAccountButton} onPress={handleLogin}>
                <Text style={styles.createAccountText}>Crear cuenta</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.information}>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', padding: 10, marginTop: 8 },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
    },
    forgotPassword: {
        fontSize: 10,
        color: '#1E90FF',
        textAlign: 'left',
        marginBottom: 12,
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: '#28A745',

        width: '100%',
        height: 35,
        borderRadius: 8,
    },
    loginButtonButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
    },
    googleButton: {
        backgroundColor: '#28A745',
        marginTop: 10,
        width: '100%',
        height: 35,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
    divider: {
        width: '100%',
        height: 1.5,
        backgroundColor: 'gray',
        marginTop: 30,
    },
    createAccountButton: {
        marginTop: 10,
        width: '100%',
        height: 30,
        borderRadius: 8,
    },
    createAccountText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1E90FF',
        textAlign: 'center',
    },
    information: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
    },
    iconGoogle: {
        width: 25,
        height: 25,
        margin: 'center',
    },

});

export default LoginForm;