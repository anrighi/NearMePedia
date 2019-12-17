import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Button} from 'react-native';

export default class WikiCard extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        name: this.props.name,
        coord: this.props.coord
    }

    render() {
        return (
            <View>
                <Text>{this.state.name}</Text>
            </View>
        );
    }

}
