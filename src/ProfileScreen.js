import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

export default class ProfileScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Profile',
    }
    render() {
    const {navigate}=this.props.navigation
      return (
        <View style={styles.container} >
            <View
            
            style={styles.profileContainer} >
            <View
            style={{
              backgroundColor: 'white',
              height: 246,
              width:246,position: 'absolute',
              borderWidth:2,
              borderRadius: 10,
              borderColor: '#b8e994',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            >
            </View>

            </View>
            <TouchableOpacity
            onPress= {()=>{
              navigate('Login')
            }}
            style={styles.button}
            >
            <Text>
            Logout
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
      backgroundColor: '#079992',
      height: 40,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
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
    profileContainer: {
      backgroundColor: 'white',
      height: 250,
      width:250,
      borderWidth:2,
      borderRadius: 10,
      borderColor: '#60a3bc',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  