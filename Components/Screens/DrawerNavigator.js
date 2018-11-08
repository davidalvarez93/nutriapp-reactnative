import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home'
import Profile from './profile'
import Recetas from './Recetas'
import Test from './Test2'
import LogOut  from './LogOut'

export default createDrawerNavigator({
  Home: { screen: HomeScreen },
  Recetas: { screen: Recetas },
  Test: { screen: Test },
  Profile: { screen: Profile },
  LogOut: { screen: LogOut },
},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'white',
    drawerWidth: 300
  });
  