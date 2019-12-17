import React from 'react';
import {Container} from 'unstated';

export class LocationContainer extends Container {
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
