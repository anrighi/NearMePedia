import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {LocationContainer} from '../assets/containers/containers'
import {Subscribe} from 'unstated'

export default class DevLocation extends React.Component {

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            //this.props.errorMessage = 'Not working in an Emulator. Try with real device';
            console.log('platform error');
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            console.log('error');
            //this.props.errorMessage: 'Permission to access location denied';
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords.latitude + "|" + location.coords.longitude)

        //this.props.lat: location.latitude,
        //this.props.lon: location.longitude,
    };

    render() {
        return (
            <Subscribe to={[LocationContainer]}>
                {counter => (
                    <View>
                        <Button
                            title="Press me"
                            onPress={() => counter.setLocation(50, 1)}/>
                        <Text>Done!</Text>
                        <Text>{counter.state.lat}</Text>
                        <Text>{counter.state.long}</Text>

                    </View>
                )}
            </Subscribe>
        );
    }
}


