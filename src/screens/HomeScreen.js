import React from "react";
import { View, Image, Text } from "react-native-web";

const HomeScreen = () => {
    <View style={styles.container}>
        <Image source={require('../../assets/favicon.png')}
            style={styles.logo} />
        <Text style={styles.help}>Esto es un ensayo</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    help: {
        fontsize: 20,
    }
})