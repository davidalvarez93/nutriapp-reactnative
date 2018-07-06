import React from 'react';
import { View, Text, Image, Button, TextInput} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import Home from '../Screens/Home'

class Screend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    render() {
        return (
            <View style={GlobalStyles.FirstScreen}>
                <Image source={require('../Images/LogoPhrase.png')}/>
                <Text>Log In to your account!</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
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
    Home: Screend,
    Second:Home,
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