// guida per redux e redux persist
// https://medium.com/survival-development/simple-redux-persist-configuration-in-react-native-expo-environment-5cae7c4a22

import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {PersistGate} from 'redux-persist/integration/react'
import {AsyncStorage} from 'react-native'
import {persistStore, persistReducer} from "redux-persist";
import positionReducer from './assets/reducers/reducer'
import AppNavigator from './navigation/AppNavigator';
import {getLocation} from './assets/actions/actions'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, positionReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

store.dispatch(getLocation(46.4925704, 11.3210021))

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
