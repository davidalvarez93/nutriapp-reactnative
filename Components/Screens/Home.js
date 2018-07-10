import React from 'react';
import { View, Text, Button} from 'react-native';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer'
import GlobalStyles from '../../GlobalStyles';

//import logoin from '../Screens/LogInOrSignUp'
import LoginOrSignUp from '../Screens/LogInOrSignUp';



class Screenr extends React.Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <View style={GlobalStyles.FirstScreen}>
            <Drawer
            ref={(ref) => this._drawer = ref}
            content={<ControlPanel />}
            >
            <MainView />
            </Drawer>
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

const RootStack = createStackNavigator(
  {
    Home: Screenr,
    //Reg: LoginOrSignUp,
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