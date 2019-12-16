import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Button} from 'react-native';
import Poicard from './PoiCard';
import {connect} from 'react-redux'
import DevLocation from "./DevLocation";

class WikiList extends React.Component {

    render() {
        return (
            <View className="patient-container">
                <Poicard title='titolo'/>
                <DevLocation/>
                <Text>{this.props.coord.lat} E {this.props.coord.long}</Text>
            </View>
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

const mapStateToProps = state => ({
    coord: state.coord,
})

export default connect(mapStateToProps)(WikiList)
