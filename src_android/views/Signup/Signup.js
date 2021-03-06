import React from 'react';
import { View, Alert, AsyncStorage } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import HeaderSign from '../../components/Header/HeaderSign';
import styles from '../../../assets/styles/styles';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
export default class Signup extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      yourFullName: '',
      yourEmail: '',
      yourPassword: '',
      repeatPassword: '',
      btnDisable: false
    }
  }

  render() {
    return (
      <View style={styles.signWrapper}>
        <Content>
        <HeaderSign style={styles.signTxt} title="Regístrate"/>
          <Form>
            <Item floatingLabel>
              <Label style={styles.signTxt}>Nombre</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({yourFullName: txt})}
                value={this.state.yourFullName}
                />
            </Item>
            <Item floatingLabel>
              <Label>Correo electrónico</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({yourEmail: txt})}
                value={this.state.yourEmail}
                keyboardType="email-address"
                />
            </Item>
            <Item floatingLabel>
              <Label>Contraseña</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({yourPassword: txt})}
                value={this.state.yourPassword}
                secureTextEntry={true}
                />
            </Item>
            <Item floatingLabel last>
              <Label>Confirmar contraseña</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({repeatPassword: txt})}
                value={this.state.repeatPassword}
                secureTextEntry={true}
                />
            </Item>
          </Form>
        </Content>
        <Button style={styles.btnSignup} full onPress={() => this.join()} disabled={this.state.btnDisable}>
          <Text uppercase={false} style={styles.btnTxt}>Registrarse</Text>
        </Button>
      </View>
    );
  }

  join() {
    this.setState({btnDisable: true});

    if(this.state.yourFullName === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Nombre completo requerido');
      return false;
    }

    if(this.state.yourEmail === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Correo electrónico requerido');
      return false;
    }

    if(this.state.yourPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Contraseña requerida');
      return false;
    }

    if(this.state.yourPassword.length < 6) {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    if(this.state.repeatPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Required', 'Confirmación de la contraseña requerida');
      return false;
    }

    if(this.state.repeatPassword !== this.state.yourPassword) {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return false;
    }

    //
    // sample save data (replace with your backend API)
    //
    firebase.auth().createUserWithEmailAndPassword(this.state.yourEmail, this.state.yourPassword)
.then(() => { }, (error) => { Alert.alert(error.message); });

    var saveData = {
      yourFullName: this.state.yourFullName,
      yourEmail: this.state.yourEmail,
      yourPassword: this.state.yourPassword
    };

    AsyncStorage.removeItem('userData');
    //AsyncStorage.setItem('userLoggedIn', 'YES');
    AsyncStorage.setItem('userData', JSON.stringify(saveData));
    //Actions.drawer({type: 'reset'});
  }
}
