import React from 'react';
import { Container } from 'unstated';

export class LocationContainer extends Container {
  state = {
      lat: props.lat,
      long: props.long,
      error: ''
   }

  setLocation(lat: lat, long: long){
  	this.setState({ lat, long });
  }

}