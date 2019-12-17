import React from 'react';
import ReadingList from "../components/ReadingList";
import {Button, View} from "react-native";

class ReadingListScreen extends React.Component {

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Map')}
                    title={'Show map'}>
                    Show map
                </Button>
                <ReadingList/>
            </View>
        )
    }


}

ReadingListScreen.navigationOptions = {
    title: 'Reading List',
};

export default ReadingListScreen
