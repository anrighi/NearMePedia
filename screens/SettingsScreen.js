import React from 'react';
import {Button, Picker, View} from "react-native";

class SettingsScreen extends React.Component {

    state = {
        language: 'en'
    }

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('settingsScreen'),
    })

    render() {
        let {t, setLocale} = this.props.screenProps;

        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={itemValue =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label={t('italian')} value="it"/>
                    <Picker.Item label={t('english')} value="en"/>
                    <Picker.Item label={t('german')} value="de"/>
                </Picker>
                <Button onPress={() => setLocale(this.state.language)} title={t('setLanguage')}/>
            </View>
        )

    }

}

export default SettingsScreen
