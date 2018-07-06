import React from 'react';
import { View, Text, Image, Button,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import Test from '../Screens/Test'

class LogInOrSignUp extends React.Component {
  static navigationOptions = {
    //title: 'Home',
    header:null,
    //headerMode:'float',
  };
  render() {
    return (
      <View style={GlobalStyles.FirstScreen}>
        <Image source={require('../Images/LogoPhrase.png')}/>
        <Image source={require('../Images/LogoImage.png')}/>
        <Text>Texto Motivador </Text>
        <Button
          onPress={() => Test}
          title="Sign Up"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />        
        <Button
          onPress={() => alert('This is a button!')}
          title="Log In"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: LogInOrSignUp
  },
});