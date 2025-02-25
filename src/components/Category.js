import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Category = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#73C686" }]} onPress={() => alert("¡Botón 1 presionado!")}>
                    <Image source={require('../../assets/Hotel_Icon.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>Alojamiento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#D9D9D9" }]} onPress={() => alert("¡Botón 2 presionado!")}>
                    <Image source={require('../../assets/Restaurant_Icon.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>Alimentación</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#73C686" }]} onPress={() => alert("¡Botón 3 presionado!")}>
                    <Image source={require('../../assets/camera_Icon.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>Sitio Turístico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#D9D9D9" }]} onPress={() => alert("¡Botón 4 presionado!")}>
                    <Image source={require('../../assets/Rental_Icon.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>Alquiler</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 5,
    },
    button: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
        resizeMode: 'contain',
    },
});

export default Category;

