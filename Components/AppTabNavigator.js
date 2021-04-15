import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import EncryptScreen from '../screens/EncryptScreen'
import DecryptScreen from '../screens/DecryptScreen'

export const AppTabNavigator=createBottomTabNavigator({
    Encrypt: {screen: EncryptScreen,
    navigationOptions: {tabBarLabel: 'Encrypt'}
    },
    Decrypt: {screen: DecryptScreen,
        navigationOptions: {tabBarLabel: 'Decrypt'}
        },
    
})