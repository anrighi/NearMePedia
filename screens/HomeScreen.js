import React from 'react';
import {StyleSheet, View} from 'react-native';
import WikiList from "../components/WikiList";

class HomeScreen extends React.Component {

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('nearby')
    });

    render() {

        return (
            <View style={styles.container}>
                <WikiList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingVertical: 5,
    },
});

export default HomeScreen
