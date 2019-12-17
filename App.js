// guida per unstated
// https://github.com/jamiebuilds/unstated

import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from "unstated";

const App = () => {
    return (
        <Provider>
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppNavigator/>
            </View>
        </Provider>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App
