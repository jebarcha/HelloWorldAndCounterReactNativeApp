import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container}>
            <Text style={ styles.title }>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        //padding: 50,
        paddingVertical: 20,
        paddingHorizontal: 100,
        fontSize: 20,
        //margin: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        //width: 150,
        borderWidth: 10
        //backgroundColor: 'red',
    }
});