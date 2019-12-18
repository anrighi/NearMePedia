import React from 'react';
import {Button, KeyboardAvoidingView, TextInput} from 'react-native';
import POIContainer from "../containers/POIContainer";
import {Subscribe} from "unstated";

export default class AddLocationForm extends React.Component {

    state = {
        address: '',
    }

    getHandler = key => val => {
        this.setState({[key]: val})
    }

    render() {
        return (
            <Subscribe to={[POIContainer]}>
                {props => (
                    <KeyboardAvoidingView>
                        <TextInput
                            placeholder={"insert here your location"}
                            value={this.state.address}
                            onChangeText={this.getHandler('address')}
                        />
                        <Button
                            title={"Add"}
                            onPress={async () => {
                                await props.insertLocation(this.state.address)
                            }}
                        />
                    </KeyboardAvoidingView>
                )}
            </Subscribe>
        )
    }


}
