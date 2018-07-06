import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Hello world!</Text>
      </View>
    );
  }
}
/*
static navigationOptions = {
  title: 'Home',
  header:null,
};*/