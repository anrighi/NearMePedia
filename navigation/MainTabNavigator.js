import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PoiScreen from '../screens/PoiScreen';
import ReadingListScreen from '../screens/ReadingListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddLocationScreen from "../screens/AddLocationScreen";
import MapScreen from "../screens/MapScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

HomeStack.path = '';

const PoiStack = createStackNavigator(
    {
        Poi: PoiScreen,
        AddLocation: AddLocationScreen,
        Map: MapScreen
    },
    config
);

PoiStack.navigationOptions = {
    tabBarLabel: 'POI',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

PoiStack.path = '';

const ReadingListStack = createStackNavigator(
    {
        ReadingList: ReadingListScreen,
    },
    config
);

ReadingListStack.navigationOptions = {
    tabBarLabel: 'Reading List',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

ReadingListStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    PoiStack,
    HomeStack,
    ReadingListStack,
    SettingsStack
})


tabNavigator.path = '';

export default tabNavigator;
