import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {LocationContainer} from '../assets/containers/containers'
import {Subscribe} from 'unstated'

export default class DevLocation extends React.Component {

    state = {
        lat: 0,
        long: 0,
        errorMessage: ''
    }


    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({errorMessage: 'Invalid platform - Try on real device'});
        } else {
            this._getLocationAsync()
        }
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({errorMessage: 'Permission to access location denied'});
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({lat: location.coords.latitude, long: location.coords.longitude});

        console.log(location.coords.latitude + "|" + location.coords.longitude)

    }

    retreiveContent(props) {
        props.setLocation(this.state.lat, this.state.long);
        //TODO: Move to HomeScreen with the results retreived by WikiDataGetter
    }


    render() {
        if (this.state.errorMessage === '') {
            return (
                <Subscribe to={[LocationContainer]}>
                    {props => (
                        <View>
                            <Button
                                title="Use my current location"
                                onPress={this.retreiveContent(props)}/>
                            <Text>{props.state.lat}</Text>
                            <Text>{props.state.long}</Text>
                        </View>
                    )}
                </Subscribe>
            );
        } else {
            return (
                <View>
                    <Text>{this.state.errorMessage}</Text>
                </View>
            );
        }
    }
}


