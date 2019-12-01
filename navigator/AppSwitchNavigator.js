import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import AppDrawerNavigator from './AppDrawerNavigator';
import React, {Component} from 'react';
export default createSwitchNavigator({

  Dashboard: { screen: AppDrawerNavigator }
})