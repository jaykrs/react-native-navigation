import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
   createStackNavigator,
   createBottomTabNavigator
} from 'react-navigation';

import React, { Component } from 'react';
import Feed from '../Feed';
import Profile from '../Profile';
import Settings from '../Settings';

export default createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  }
);
