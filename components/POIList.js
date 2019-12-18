import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PoiCard from './PoiCard';
import {Subscribe} from "unstated";
import POIContainer from "../containers/POIContainer";

class PoiList extends React.Component {

    render() {
        let func = this.props.dumbFunction
        let loc = this.props.newLocale
        return (
            <Subscribe to={[POIContainer]}>
                {(props) => (
                    <ScrollView style={styles.container}>
                        {
                            props.state.pois.map(function (d, idx) {
                                return (
                                    <PoiCard
                                        key={idx++}
                                        name={d.name}
                                        coord={d.coord}
                                        navigation={func}
                                        newLocale={loc}
                                    />
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
