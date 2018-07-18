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
        user:null,
      })
    }
    componentDidMount(){
      GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {
         console.log("play services are available.")
      })
      .catch(err => {
        console.log('Play services error', err.code, err.message);
      });
      GoogleSignin.configure({
        //scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '973765555551-pupu2jhgduqiqe1ef0rg340s3v0tkqff.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      }).then(() => {
        this.getCurrentUser().then(        console.log("configured....")
      )
            });
    }
    getCurrentUser = async () => {
      console.log("current user ")
      try {
        let user = await GoogleSignin.currentUser()
        this.setState({ user });
        console.log("cur user ",user)
      } catch (error) {
        console.log(error);
      }
    };
    _signIn = async () => {
      try {
        console.log("signin")
        let user = await GoogleSignin.signIn();
        console.log("signin user",this.state.user)
        this.setState({ user: "new user" });
      } catch (error) {
        console.log("inside signin error",error)
      }
      //navigate('Profile')

    };
    render() {
      console.log("2--",this.state.user)
    const {navigate}=this.props.navigation
      return (
        <View style={styles.container} >
            <GoogleSigninButton
            style={{ width: 150, height: 48,margin : 20, }}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}/>
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
  });
  