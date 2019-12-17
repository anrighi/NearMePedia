import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Button} from 'react-native';
import Poicard from './PoiCard';
import DevLocation from "./DevLocation";
import {LocationContainer} from '../assets/containers/containers'
import {WikiDataContainer} from '../assets/containers/containers'
import {Subscribe} from "unstated";
import {getWikiData} from "./WikiDataGetter";
import WikiCard from "./WikiCard";

export default class WikiList extends React.Component {

    render() {
        return (
            <View>
                <Poicard title='titolo'/>
                <DataBtn/>
                <List/>
            </View>
        )
    }
}


async function getData(loc, container) {
    getWikiData(loc, container);
}

class DataBtn extends React.Component {

    render() {
        return (
            <Subscribe to={[LocationContainer, WikiDataContainer]}>
                {(location, container) => (
                    <View>
                        <Button
                            title="get list"
                            onPress={async () => await getData(location, container)}/>
                    </View>
                )}
            </Subscribe>
        )
    }
}

class List extends React.Component {

    render() {
        return (
            <Subscribe to={[WikiDataContainer]}>
                {props => (
                    <ScrollView>
                        {props.state.results.map(function (d, idx) {
                            return (
                                <WikiCard key={idx++} title={d.title}/>
                            );
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
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});