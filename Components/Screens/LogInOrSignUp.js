import React from 'react';
import { View, Text, Image, Button,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import LogIn from '../Screens/Login'

class LogInOrSignUp extends React.Component {
  render() {
    return (
      <View style={GlobalStyles.FirstScreen}>
        <Image source={require('../Images/LogoPhrase.png')}/>
        <Image source={require('../Images/LogoImage.png')}/>
        <Text>Texto Motivador </Text>
        <Button
          onPress={() => alert('TODO!')}
          title="Sign Up"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />        
        <Button
          onPress={() => this.props.navigation.navigate('Second')}
          title="Log In"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: LogInOrSignUp,
    Second:LogIn,
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