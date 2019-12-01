import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Profile from '../Profile'
import DashboardStackNavigator from './DashboardStackNavigator';
export default createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  Accounts: {
    screen: Profile
  }
}
);