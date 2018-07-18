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
      backgroundColor: '#079992',
      height:45,
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
