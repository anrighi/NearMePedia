import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native'
import {getAddress, getCoordinates} from "../components/Geocoding";

class POIContainer extends PersistContainer {

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    }


    state = {
        pois: [],
        error: ''
    }


    async insertLocation(text) {

        if (text.length > 0) {

            let obj = await getCoordinates(text)
            let address = await getAddress(obj.long, obj.lat)

            this.setState({
                pois: [...this.state.pois, {name: address, coord: obj.coord}]
            })
        }
    }
}

export default POIContainer
