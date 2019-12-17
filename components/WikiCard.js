import React from 'react';
import {ScrollView, TouchableOpacity, StyleSheet, Image, Text, View, Button} from 'react-native';
import * as WebBrowser from "expo-web-browser";

export default class WikiCard extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        title: this.props.title,
        coord: this.props.coord
    }

    handlePress(title){
        let link = 'https://en.wikipedia.org/wiki/' + title;
        WebBrowser.openBrowserAsync(
            link
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchable} onPress={async () => await this.handlePress(this.state.title)}>
                    <Text>
                        {this.state.title}
                    </Text>
                    <Button
                        title="♡"
                        style={styles.button}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    touchable: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,

    },
    button: {
        color: 'green',

    }
});
