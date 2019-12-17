import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Subscribe} from "unstated";
import WikiCard from "./WikiCard";
import {WikiDataContainer} from "../assets/containers/WikiDataContainer";

export default class WikiList extends React.Component {

    render() {
        return (
            <View>
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
