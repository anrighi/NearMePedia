import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Subscribe} from "unstated";
import ReadingContainer from "../assets/containers/ReadingContainer";
import WikiCard from "./WikiCard";

class ReadingList extends React.Component {

    render() {
        return (
            <Subscribe to={[ReadingContainer]}>
                {props => (
                    <ScrollView>
                        {
                            props.state.read.map(function (d, idx) {
                                return (
                                    <WikiCard key={idx++} title={d.title} coord={d.coord}/>
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
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

export default ReadingList
