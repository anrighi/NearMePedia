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
        title: '',
        image: '',
        coord: {
            lat: 0,
            long: 0,
        }
    }

    setCoordinates = (lat, long) => {
        this.setState({coord: {lat: lat, long: long}});
    }

    setTitle = (title) => {
        this.setState({title: title});
    }

    setImage = (image) => {
        this.setState({image: image});
    }

}

