import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Button} from 'react-native';
import Poicard from './PoiCard';
import DevLocation from "./DevLocation";
import {LocationContainer} from '../assets/containers/containers'
import {WikiDataContainer} from '../assets/containers/containers'
import {Subscribe} from "unstated";
import WikiDataGetter from "./WikiDataGetter";

export default class WikiList extends React.Component {

    render() {
        return (
            <View>
                <Poicard title='titolo'/>
                <List/>
            </View>
        )
    }
}

class List  extends React.Component{

    render() {
        return (
            <Subscribe to={[LocationContainer, WikiDataContainer]}>
                {(location, wikiData) => (
                    <View>{WikiDataGetter(location , wikiData)}<Text> CIAO</Text></View>
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