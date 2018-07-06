import React from 'react';
import { View, Text, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';

//import logoin from '../Screens/LogInOrSignUp'
//import LoginOrSignUp from '../Screens/LogInOrSignUp'

class Screenr extends React.Component {
    render() {
        return (
            <View style={GlobalStyles.FirstScreen}>
                <Text>HOMESCREEN</Text>      
                <Button
                    //onPress={() => this.props.navigation.navigate('LoginOrSignUp')}
                    title="Log Out"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
  {
    Home: Screenr,
    //LoginOrSignUp: LoginOrSignUp
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