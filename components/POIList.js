import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Button} from 'react-native';
import Poicard from './PoiCard';
import DevLocation from "./DevLocation";
import {Subscribe} from "unstated";
import POIContainer from "../assets/containers/POIContainer";
/*
import {LocationContainer} from '../assets/containers/containers'
import {WikiDataContainer} from '../assets/containers/containers'
import {Subscribe} from "unstated";
import WikiDataGetter from "./WikiDataGetter";
*/

class PoiList extends React.Component {

    render() {
        return (
            <Subscribe to={[POIContainer]}>
                {props => (
                    <View>
                        {
                            props.state.pois.map(function (d, idx) {
                                return (
                                    <Poicard key={idx++} name={d.name}/>
                                )
                            })
                        }
                    </View>
                )}
            </Subscribe>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

export default PoiList
