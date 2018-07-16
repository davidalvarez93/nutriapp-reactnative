import React from 'react';
import { View, Text, Button, ScrollView, StatusBar, Image, StyleSheet} from 'react-native';
import { createStackNavigator, createDrawerNavigator, TabRouter } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../Images/chat.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> HOME PAGE! </Text> 
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Drawer Open"
        />
</View>
      );
    }
  }
  
class MyProfile extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({tintColor}) => (
      <Image
      source={require('../Images/profile.jpg')}
      style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
};

render(){
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> HOME PAGE! </Text> 
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
         <Button
          onPress={() => this.props.navigation.closeDrawer()}
          title="Drawer close"
        />
        </View>
    );
  } 
}

  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../Images/notificaciones.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> HOME PAGE! </Text> 
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
         <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Drawer Open"
        />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
const MiApp = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Profile: {
    screen: MyProfile,
  },

});

export default createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
    Profile: {
      screen: MyProfile,
    },
  }, 
  {
drawerPosition: 'right',
initialRouteName: 'Home',
drawerBackgroundColor: '#0000ff',
drawerWidth: 300,
  });
  /*
class Screenr extends React.Component {
    render() {
        return (
            <View style={GlobalStyles.FirstScreen}>
                <Text>HOMESCREEN</Text>      
                <Button
                   onPress={() => this.props.navigation.goBack()}
                    title="Log Out"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
*/
/*
const RootStack = createStackNavigator(
  {
    Menu: MyHomeScreen,
    //Reg: LoginOrSignUp,
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none',
  },
);*/
/*
export default class App extends React.Component {
  render() {
   // return <RootStack />;
   return <MiApp/>;
  }}
  */