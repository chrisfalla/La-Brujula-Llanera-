import React, {useState} from 'react';
import { View, TextInput,Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';

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

        <View style={styles.forgotPassword}><TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>¿Olvido su Contraseña?</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <Button  title= 'Iniciar sesión' onPress={handleLogin} color='#007AFF'/> 
            <View style={{height: 10}} />
            <Button  title= 'Iniciar con Google' onPress={handleLogin} />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: { width: '100%', padding: 20},
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:15,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 8,

    },
    forgotPassword:{
        color: '#1E90FF',  // Color azul para simular un enlace
        textAlign: 'flex-start',
        marginBottom: 10,
        textDecorationLine: 'underline', 
    },
    buttonContainer: {
        marginTop: 10,
        
    },
});

export default LoginFrom;