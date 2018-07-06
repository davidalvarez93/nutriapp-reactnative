import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Screen1 extends React.Component {
  static navigationOptions = {
    //title: 'Home',
    //header:null,
    //headerMode:'float',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HOMESCREEN</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: Screen1
  },
});