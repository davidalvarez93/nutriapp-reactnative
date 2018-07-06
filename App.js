
import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginOrSignUp from './Components/Screens/LogInOrSignUp'
import GlobalStyles from './GlobalStyles'

class HelloScreen extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Second')}>
        <View style={GlobalStyles.FirstScreen}>
          <Image source={require('./Components/Images/Logo.png')}/>
          <Text>Journeys</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HelloScreen,
    Second:LoginOrSignUp,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }}
  
 
 
  