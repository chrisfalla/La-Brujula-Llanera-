import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity, Pressable } from 'react-native';

const LoginFrom =() =>{
    const [email, setEmail] = useState ('');
    const [password, SetPassword] = useState ('');

    const handleLogin  = () => {
        if (email ==='' && password === ''){
            Alert.alert('Ha iniciado sesión!');
        } else{
            Alert.alert('Verifique el correo o la contaseña');
        }
    };

    const handleForgotPassword = () =>{
        Alert.alert('pantalla de recuperación de contraseña')
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Correo electroníco</Text>
            <TextInput
            style={styles.input}
            placeholder='ejemplo@ejemplo.com'
            keyboardType='email-address'
            value={email}
            onChange={setEmail}
        />
        <Text style={styles.title}>Contraseña</Text>
            <TextInput
            style={styles.input}
            placeholder='********'
            secureTextEntry
            value={password}
            onChange={SetPassword}
            />

        <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>¿Olvido su Contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
        <Text style={styles.googleButtonText}>Iniciar con Google</Text>
        </TouchableOpacity>
        <View style={styles.container}>
        <Text style={styles.createAccont}>Crear cuenta</Text>
        </View>
        
        <View style={styles.container}>
        <Text style={styles.information}>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</Text>
        </View>
       
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', padding: 10, marginTop: 15,},
    title:{
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom:1,
        
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,

    },
    forgotPassword:{
        color: '#1E90FF',  // Color azul para simular un enlace
        textAlign: 'flex-start',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: '#28A745',
        marginTop: 10,
        width: '100%',
        height: 35,
        borderRadius:8,
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
        borderRadius:8,
        
    },
    googleButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
    },
 

    createAccont: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    information: {
       
        fontSize: 11,
        marginTop: '15',
        textAlign: 'center',
    },
});

export default LoginFrom;