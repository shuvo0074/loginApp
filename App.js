import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import  ProfileScreen from "./src/ProfileScreen";

const Nav=StackNavigator({
  Login: {screen: HomeScreen},
  Profile: {screen: ProfileScreen}
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#079992'
    }
  }
}
)

export default class App extends Component<{}> {
  render() {
    return (
      <Nav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: 'red',
    height: 50
  }
});
