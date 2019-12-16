mport React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class DevLocation extends React.Component {
  
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.props.errorMessage: 'Not working in an Emulator. Try with real device';
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
   
    if (status !== 'granted') {
      console.log('error');
      //this.props.errorMessage: 'Permission to access location denied';
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.latitude "|" location.longitude)

    //this.props.lat: location.latitude,
    //this.props.lon: location.longitude,
  };
}