import React from 'react';
import {Button, Text, View} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Subscribe} from 'unstated'
import {getWikiData} from "./WikiDataGetter";
import WikiDataContainer from "../containers/WikiDataContainer";
import LocationContainer from "../containers/LocationContainer";

export default class DevLocation extends React.Component {

    state = {
        lat: 0,
        long: 0,
        errorMessage: ''
    };

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({errorMessage: 'Permission to access location denied'});
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({lat: location.coords.latitude, long: location.coords.longitude});
    };


    render() {
        if (this.state.errorMessage === '') {
            return (
                <Subscribe to={[LocationContainer, WikiDataContainer]}>
                    {(location, wiki) => (
                        <View>
                            <Button
                                title={this.props.newT('useLocation')}
                                onPress=
                                    {async () =>
                                        await this._getLocationAsync()
                                            .then(location.setLocation(this.state.lat, this.state.long))
                                            .then(await getWikiData(this.props.newLocale, location.state, wiki))
                                            .then(this.props.clickFunction)
                                    }
                            />
                        </View>
                    )}
                </Subscribe>
            );
        } else {
            return (
                <View>
                    <Text>{this.props.newT('errorMessage')}</Text>
                </View>
            );
        }
    }
}
