import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeContent} />
                <Tab.Screen name="Login" component={LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const HomeContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la pantalla de inicio</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default HomeScreen;