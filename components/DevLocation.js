import React from 'react';
import {Platform, Text, View, Button} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Subscribe} from 'unstated'
import {getWikiData} from "./WikiDataGetter";
import {WikiDataContainer} from "../assets/containers/WikiDataContainer";
import {LocationContainer} from "../assets/containers/LocationContainer";

export default class DevLocation extends React.Component {

    state = {
        lat: 0,
        long: 0,
        errorMessage: ''
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({errorMessage: 'Permission to access location denied'});
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({lat: location.coords.latitude, long: location.coords.longitude});

        console.log('DEVLOC -> Dati ritornati dal device: ' + location.coords.latitude, location.coords.longitude)
    }

    async retrieveContent(store) {

        await this._getLocationAsync()

        console.log('DEVLOC -> Dati nello stato: ' + this.state.lat, this.state.long);

        store.setLocation(this.state.lat, this.state.long);
    }

    render() {
        if (this.state.errorMessage === '') {
            return (
                <Subscribe to={[LocationContainer, WikiDataContainer]}>
                    {(location, wiki) => (
                        <View>
                            <Button
                                title="Use my current location"
                                onPress=
                                    {async () =>
                                        await this.retrieveContent(location)
                                            .then(await getWikiData(location.state, wiki)
                                            ).then(this.props.clickFunction)
                                    }
                            />
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


