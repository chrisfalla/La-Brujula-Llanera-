import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const FooterNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Login" component={LoginScreen} />
                <Tab.Screen name="Register" component={LoginScreen} />
                <Tab.Screen name="Search" component={LoginScreen} />
                <Tab.Screen name="Mapa" component={LoginScreen} />
                <Tab.Screen name="Categories" component={LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default FooterNavigation;
