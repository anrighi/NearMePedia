import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DevLocation from "../components/DevLocation";

export default function PoiScreen() {
    return (
        <ScrollView style={styles.container}>

        </ScrollView>
    );
}

PoiScreen.navigationOptions = {
    title: 'Links',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
