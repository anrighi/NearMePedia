import React from 'react';
import {StyleSheet, View} from 'react-native';
import PoiCard from './PoiCard';
import {Subscribe} from "unstated";
import POIContainer from "../assets/containers/POIContainer";
import {LocationContainer} from "../assets/containers/LocationContainer";

class PoiList extends React.Component {

    render() {
        return (
            <Subscribe to={[POIContainer, LocationContainer]}>
                {(propsPOI, propsLocation) => (
                    <View>
                        {
                            propsPOI.state.pois.map(function (d, idx) {
                                return (
                                    <PoiCard key={idx++} name={d.name}/>
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
