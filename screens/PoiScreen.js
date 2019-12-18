import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import DevLocation from '../components/DevLocation';
import AddLocationScreen from "./AddLocationScreen";
import POIList from "../components/POIList";

class PoiScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('poiTitle')
    });

    render() {
        let {t} = this.props.screenProps;
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('AddLocation')}
                    title={t('addLocation')}>
                    Add location
                </Button>
                <DevLocation screenProps={this.props.screenProps}
                             clickFunction={() => this.props.navigation.navigate('Home')}/>
                <POIList/>
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
