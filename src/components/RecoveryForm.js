import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity,  } from 'react-native';


const RecoveryForm = ({ onBack }) => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = () => {
        if (email === '') {
            Alert.alert('Error', 'Ingrese su correo electrónico.');
        } else {
            Alert.alert(
                'Éxito',
                'Se ha enviado un enlace de recuperación a su correo electrónico.',
                [
                    {
                        text: 'OK',
                        onPress: onBack,
                    },
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Recuperar Contraseña</Text>
            <Text style={styles.description}>Ingresa el correo electrónico asociado a la cuenta, para enviarte un enlace para recuperar tu contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='ejemplo@ejemplo.com'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.recoveryButton} onPress={handlePasswordRecovery}>
                <Text style={styles.recoveryButtonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBack}>
                <Text style={styles.backButton}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '85%', padding: 10,  },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
        marginBottom: 25,
    },
    recoveryButton: {
        backgroundColor: 'rgba(40, 167, 70, 0.65)',
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