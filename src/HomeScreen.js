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
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
export default class HomeScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Login',
    }
    constructor (props){
      super(props)
      this.state = ({
        user:'a',
      })
    }
    componentDidMount(){
      GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {
        // play services are available. can now configure library
      })
      .catch(err => {
        console.log('Play services error', err.code, err.message);
      });
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        //iosClientId: '<FROM DEVELOPER CONSOLE>', // only for iOS
        webClientId: '973765555551-pupu2jhgduqiqe1ef0rg340s3v0tkqff.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        //hostedDomain: '', // specifies a hosted domain restriction
        //forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
        //accountName: '', // [Android] specifies an account name on the device that should be used
      }).then(() => {
        // you can now call currentUserAsync()
      });
    }
    signIn = async () => {
        GoogleSignin.signIn()
        .then((user)=>{
          console.log(user)
          this.setState({ user: 'email' });
        })
        
       .catch ((error)=> {
        console.log("Wrong signin -------" , error)
      })
      .done()
    }
    render() {
      console.log(this.state.user)
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
            <Text>*** {this.state.user} ***
            </Text>
            <GoogleSigninButton
            style={{ width: 48, height: 48,margin : 20, }}
            onPress={this.signIn}/>
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
  