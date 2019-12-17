import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import WikiList from '../components/WikiList';

export default function PoiScreen() {
    return (
        <ScrollView style={styles.container}>
            <WikiList/>
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
