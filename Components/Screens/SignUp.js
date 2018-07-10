import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import {
    createStackNavigator,
    createBottomTabNavigator
  } from 'react-navigation';
//import Principal from '../Screens/LogInOrSignUp';
import GlobalStyles from '../../GlobalStyles';

class SignUp extends React.Component {

    static navigationOptions ={
      title: 'Sign Up',
      headerStyle: {
        backgroundColor: '#0000ff',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>REGISTER</Text>
        <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "Name"
          placeholder="First Name"
          //caretHidden = {true}
          maxLength = {80}
          //clearTextOnFocus = {true}
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(text) => this.setState({text})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          maxLength = {40}
          placeholder="Last Name"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(text) => this.setState({text})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "email-address"
          maxLength = {40}
          placeholder="Email"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(text) => this.setState({text})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "phone-pad"
          maxLength = {40}
          placeholder="Phone Number"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(text) => this.setState({text})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          maxLength = {40}
          placeholder="Password"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(text) => this.setState({text})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          maxLength = {40}
          placeholder="Password Confirm"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(text) => this.setState({text})}
        />
  <TouchableOpacity style={GlobalStyles.button}
        //onPress = {()=> this.props.navigation.navigate('Segunda')}
        >
        <Text style={GlobalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
  
      </View>
      );
    }
  }

  const RootStack = createStackNavigator(
    {
      Sign: SignUp,
      //Segunda: Principal,
    },
    {
      initialRouteName: 'Sign',
      headerMode: 'none',
    },
  );

  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }}