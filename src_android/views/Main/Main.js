import React from 'react';
import { View, StatusBar, AsyncStorage, Image,TextInput } from 'react-native';
import { Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux';
import styles from '../../../assets/styles/styles';
import logo from '../../../assets/images/clipboard.png';
import * as firebase from 'firebase';
export default class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    //
    // check if user is logged in
    //
    AsyncStorage.getItem('userLoggedIn', (err, userData) => {
      if(userData === null || userData === undefined || userData === '') {
        return false;
      }else{
        Actions.drawer({type: 'reset'});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.mainWrapper}>
         <Image source={logo} style={styles.logo} />
        </View>

        <Button style={styles.btnPrimary} full onPress={() => this.signUp()}>
          <Text uppercase={false} style={styles.btnTxt}>¿Aún no tienes cuenta? Regístrate</Text>
        </Button>
        <Button style={styles.btnSecondary} full onPress={() => this.signIn()}>
          <Text uppercase={false} style={styles.btnTxt}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </Button>
      </View>
    );
  }

  signIn() {
    Actions.signin();
  }

  signUp() {
    Actions.signup();
  }
}
