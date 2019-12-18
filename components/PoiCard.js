import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Subscribe} from "unstated";
import WikiDataContainer from "../containers/WikiDataContainer";

export default class PoiCard extends React.Component {

    state = {
        name: this.props.name,
        coord: this.props.coord
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Subscribe to={[WikiDataContainer]}>
                    {container => (
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={async () => await this.getWikiData(this.props.newLocale, this.state, container)
                                .then(this.props.navigation)}
                        >
                            <Text>{this.state.name}</Text>
                        </TouchableOpacity>
                    )}
                </Subscribe>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    touchable: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});
