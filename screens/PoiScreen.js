import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import DevLocation from '../components/DevLocation';
import AddLocationScreen from "./AddLocationScreen";
import POIList from "../components/POIList";

class PoiScreen extends React.Component {
    static navigationOptions = {
        title: 'Locations',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('AddLocation')}
                    title={'Add location'}>
                    Add location
                </Button>
                <Button
                    onPress={() => this.props.navigation.navigate('Map')}
                    title={'Show map'}>
                    Show map
                </Button>
                <POIList/>
                <DevLocation clickFunction={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

export default PoiScreen
