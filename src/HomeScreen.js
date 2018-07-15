import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Login',
    }
    render() {
    const {navigate}=this.props.navigation
      return (
        <View style={styles.container} >
            <TouchableOpacity
            onPress= {()=>{
                navigate('Profile')
            }}
            style ={styles.button}
            >
            <Text
            style={styles.buttonText}
            >
            Home
            </Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1e3799',
    },
    button: {
        borderRadius: 7,
        borderWidth:1,
        borderColor: '#4a69bd',
        backgroundColor: '#079992'
    },
    buttonText: {
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
  