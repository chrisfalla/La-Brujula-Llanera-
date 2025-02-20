import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity, Image } from 'react-native';

const LoginForm = ({ onForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' && password === '') {
            Alert.alert('Ha iniciado sesión!');
        } else {
            Alert.alert('Verifique el correo o la contraseña');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia sesión con tu cuenta</Text>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder='ejemplo@ejemplo.com'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='********'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={onForgotPassword}>
                <Text style={styles.forgotPassword}>¿Olvidó su Contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                               <Text style={styles.loginButtonButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
            <Image source={require('../../assets/icon-google.png')} style={styles.googleIcon} />
                <Text style={styles.googleButtonText}>Iniciar con Google</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.createAccountButton} onPress={handleLogin}>
                <Text style={styles.createAccountText}>Crear cuenta</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.information}>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', padding: 10, marginTop: 8 },
    title: {
fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    label: {
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
       marginTop: 10,
        width: '100%',
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
           },
    googleButton: {
        backgroundColor: '#28A745',
        marginTop: 10,
        width: '100%',
        height: 35,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        },    
    googleButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
           },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 20,
    },
    createAccountButton: {
        marginTop: 10,
        width: '100%',
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
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
});

export default LoginForm;