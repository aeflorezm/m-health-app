import React from 'react';
import { View, Alert, AsyncStorage } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import HeaderSign from '../../components/Header/HeaderSign';
import styles from '../../../assets/styles/styles';
import { Actions } from 'react-native-router-flux';

export default class Signin extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      yourEmail: '',
      yourPassword: '',
      btnDisable: false,

      //
      // ignore this state
      //
      matchEmail: '',
      matchPassword: ''
    }
  }

  componentWillMount() {
    //
    // check login user this is for the sample data only since i dont have backend api. ignore this function
    //
    AsyncStorage.getItem('userData', (err, userData) => {
      if(userData === null || userData === undefined || userData === '') {
        this.setState({
          matchEmail: '',
          matchPassword: ''
        });
      }else{
        var data = JSON.parse(userData);
        this.setState({
          matchEmail: data.yourEmail,
          matchPassword: data.yourPassword
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.signWrapper}>
        <HeaderSign style={styles.signTxt} title="Iniciar sesión"/>
        <Content>
          <Form>
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
          </Form>
        </Content>
        <Button style={styles.btnSignin} full onPress={() => this.login()} disabled={this.state.btnDisable}>
          <Text uppercase={false} style={styles.btnTxt}>Iniciar sesión</Text>
        </Button>
      </View>
    );
  }

  login() {
    this.setState({btnDisable: true});

    if(this.state.yourEmail === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'Correo electrónico requerido');
      return false;
    }

    if(this.state.yourPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Error', 'La contraseña es requerida');
      return false;
    }

    //
    // Add your backend api here
    //

    //
    // sample error message when api backend deny your request
    //
    if(this.state.matchEmail === '' && this.state.matchPassword === '') {
      this.setState({btnDisable: false});
      Alert.alert('Acceso denegado', 'Correo electrónico o contraseña requeridos');
      return false;
    }

    AsyncStorage.setItem('userLoggedIn', 'YES');
    Actions.drawer({type: 'reset'});
  }
}
