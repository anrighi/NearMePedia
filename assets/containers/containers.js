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
        this.setState({coord: {lat: lat, long: long}});
    }

}


export class WikiDataContainer extends PersistContainer {

    persist = {

        key: 'counter',
        version: 1,
        storage: AsyncStorage,

    }


    state = {
        results: []
    }

    addResult = async (array) => {
        console.log(array)

        this.setState({
            results: [...this.state.results, ...array]
        })
    }

}

