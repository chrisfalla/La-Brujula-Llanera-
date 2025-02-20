import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LoginForm from '../components/LoginForm';
import RecoveryForm from '../components/RecoveryForm';

const LoginScreen = () => {
    const [showRecoveryForm, setShowRecoveryForm] = useState(false);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            {showRecoveryForm ? (
                <RecoveryForm onBack={() => setShowRecoveryForm(false)} />
            ) : (
                <LoginForm onForgotPassword={() => setShowRecoveryForm(true)} />
            )}
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
    logo: {
        width: 250,
        height: 250,
        marginBottom: 0,
        resizeMode: 'contain',
    },
});

export default LoginScreen;