import React from 'react';
import { Text, View } from 'react-native';

export const HelloWorldScreen = () => {
    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 45,
              textAlign: 'center'
            }}>
              Hello World!
            </Text>
          </View >
    )
}
