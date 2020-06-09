import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';  
import HomeConfig from '../screens/HomeConfig';

export default createStackNavigator({
    Home,
   HomeConfig
})
