import React, { Component }from 'react';

import { Icon, Content, Container, Header, Button, Left, Right, Body, Text } from 'native-base';

import GlobalStyles from '../../GlobalStyles';

export default class HomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="home" style={GlobalStyles.icon}/>
      )
    };
    render() {
      return (
        <Container  style={GlobalStyles.BgColor}>
          <Header transparent>
            <Left>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon type="FontAwesome" name="navicon" style={GlobalStyles.icon}/>
              </Button>
            </Left>
            <Body>
              <Text>HomeScreen</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon type="FontAwesome" name="ellipsis-v" style={GlobalStyles.icon}/>
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={GlobalStyles.container}>
            <Text>
              Home Content
            </Text>
          </Content>
        </Container>
      );
    }
  }