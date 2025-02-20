import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Category = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#73C686" }]}  onPress={() => alert("¡Botón 1 presionado!") }>
                    <Text style={styles.buttonText}>Alojamiento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#D9D9D9" }]} onPress={() => alert("¡Botón 2 presionado!")}>
                    <Text style={styles.buttonText}>Alimentacion</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#73C686" }]} onPress={() => alert("¡Botón 3 presionado!")}>
                    <Text style={styles.buttonText}>Sitio Turistico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#D9D9D9" }]} onPress={() => alert("¡Botón 4 presionado!")}>
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
        alignSelf: 'center', // Centra la fila en la pantalla
        marginVertical: 5, // Espacio entre filas
    },
    button: {
        width: 150, // Ajusta el ancho
        height: 150, // Ajusta el alto
        backgroundColor: '#6200ea',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginHorizontal: 15,
        marginVertical: 10, // Reduce el espacio entre botones
        borderRadius: 15, // Bordes redondeados
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Category;
