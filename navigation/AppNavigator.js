import React from 'react';
import {createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

import PoiStack from "./POIStack";
import HomeStack from "./HomeStack";
import ReadingListStack from "./ReadingListStack";
import SettingsStack from "./SettingsStack";

const tabNavigator = createBottomTabNavigator({
    PoiStack,
    HomeStack,
    ReadingListStack,
    SettingsStack
})


export default createAppContainer(
    createSwitchNavigator({
        Main: tabNavigator,
    })
);

