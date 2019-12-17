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

    addResult = (title, lat, long, dist) => {
        this.setState({
            results: [...this.state.results, {title: title, coord: {lat: lat, long: long, dist: dist}}]
        })
    }

    resetResult = () => {
        this.setState({
            results: []
        })
    }

}

