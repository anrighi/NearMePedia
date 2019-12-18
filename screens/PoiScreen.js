import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import DevLocation from '../components/DevLocation';
import POIList from "../components/POIList";

class PoiScreen extends React.Component {
    static navigationOptions = {
        title: 'Point of Interests',
    };

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('AddLocation')}
                    title={'Add location'}>
                    Add location
                </Button>
                <DevLocation clickFunction={() => this.props.navigation.navigate('Home')}/>
                <POIList dumbFunction={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }

}

export default PoiScreen
