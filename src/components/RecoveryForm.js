import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';

const RecoveryForm = ({ onBack }) => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = () => {
        if (email === '') {
            Alert.alert('Ingrese su correo electrónico.');
        } else {
            Alert.alert('Se ha enviado un enlace de recuperación a su correo electrónico.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='ejemplo@ejemplo.com'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.recoveryButton} onPress={handlePasswordRecovery}>
                <Text style={styles.recoveryButtonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBack}>
                <Text style={styles.backButton}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', padding: 10, marginTop: 8 },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    recoveryButton: {
        backgroundColor: '#28A745',
        width: '100%',
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    recoveryButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    backButton: {
        fontSize: 14,
        color: '#1E90FF',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default RecoveryForm;