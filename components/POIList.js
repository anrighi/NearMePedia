import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PoiCard from './PoiCard';
import {Subscribe} from "unstated";
import POIContainer from "../assets/containers/POIContainer";
import {LocationContainer} from "../assets/containers/LocationContainer";

class PoiList extends React.Component {

    render() {
        let func = this.props.dumbFunction

        return (
            <Subscribe to={[POIContainer, LocationContainer]}>
                {(propsPOI, propsLocation) => (
                    <ScrollView style={styles.container}>
                        {
                            propsPOI.state.pois.map(function (d, idx) {
                                return (
                                    <PoiCard
                                        key={idx++}
                                        name={d.name}
                                        coord={d.coord}
                                        navigation={func}/>
                                )
                            })
                        }
                    </ScrollView>
                )}
            </Subscribe>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 30,
    },
});

export default PoiList
