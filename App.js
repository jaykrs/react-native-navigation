
import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppSwitchNavigator from './navigator/AppSwitchNavigator';
import Icon from '@expo/vector-icons/Ionicons';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import DashboardStackNavigator from './navigator/DashboardStackNavigator';
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
 
});