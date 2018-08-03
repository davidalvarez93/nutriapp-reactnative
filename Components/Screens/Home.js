import React from 'react';
import { View, Text, Button, ScrollView, StatusBar, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, TabRouter } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import SignUp from '../Screens/SignUp';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/chat.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    <View style={styles.container}>
      <Swiper
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          )
        }}
        onSwiped={(cardIndex) => { console.log(cardIndex) }}
        onSwipedAll={() => { console.log('onSwipedAll') }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}>
        <Button
          onPress={() => { console.log('oulala') }}
          title="Press me">
          You can press me
            </Button>
      </Swiper>
    </View>
  }
}



class MyProfile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/profile.jpg')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> HOME PAGE! </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />

      </View>
    );
  }
}



class MyPaymentMethods extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Payment methods',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/notificaciones.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };



  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is the Payment methods screen </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
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

class MyFlights extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Flights',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/notificaciones.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };





  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is the flights screen </Text>

      </View>
    );
  }
}


class LogOutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/notificaciones.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };



  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Are you sure you want to log out? </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Sign')}
          title="Log out"
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back home"
        />
      </View>
    );
  }
}



const MiApp = createDrawerNavigator({
  Home: { screen: MyHomeScreen, },
  Profile: { screen: MyProfile, },
  Payment: { screen: MyPaymentMethods, },
  Flights: { screen: MyFlights, },
  LogOut: { screen: LogOutScreen, },


});

export default createDrawerNavigator({
  Home: { screen: MyHomeScreen, },
  Profile: { screen: MyProfile, },
  Payment: { screen: MyPaymentMethods, },
  Flights: { screen: MyFlights, },
  LogOut: { screen: LogOutScreen, },
},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: '#f0f8ff',
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