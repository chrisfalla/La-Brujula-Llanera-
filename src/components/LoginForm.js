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
                placeholder='ejemplo@gmail.com'
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
    container: { width: '100%', padding: 5, marginTop: 1, },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 30,
    },
    input: {
        width: '85%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
        margin:'auto',
        marginBottom: 15,
    },
    forgotPassword: {
        fontSize: 10,
        color: '#1E90FF',
        textAlign: 'left',
        marginTop: -10,
        marginLeft: 25,
        marginBottom: 15,
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: 'rgba(40, 167, 70, 0.65)',
        marginTop: 10,
        width: '85%',
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    loginButtonButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    googleButton: {
        backgroundColor: 'rgba(40, 167, 70, 0.65)',
        marginTop: 10,
        width: '85%',
        height: 35,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
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
        width: '85%',
        height: 1,
        backgroundColor: 'gray',
        margin:'auto',
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
        fontSize: 10,
        textAlign: 'center',
        marginTop: 1,
        fontStyle:'italic',
    },
});

export default LoginForm;