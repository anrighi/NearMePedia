import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native'

export class LocationContainer extends PersistContainer {

    persist = {

        key: 'counter',
        version: 1,
        storage: AsyncStorage,

    }

    
    state = {
        coord: {
            lat: 0,
            long: 0,
        },
        error: ''
    }

    setLocation = (lat, long) => {
        this.setState({lat: lat, long: long});
    }

}
