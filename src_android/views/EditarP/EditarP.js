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
      edad: '',
      sexo: '',
      alergias: 'No presenta alergias',
      basic:'',
      date:'',
      duty:'No hay interacciones recientes',
      medication:'No hay medicamentos asignados',
      btnDisable: false
    }
  }

  render() {
    return (
      <View style={styles.signWrapper}>
        <Content>
        <HeaderSign style={styles.signTxt} title="Regístro paciente"/>
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
              <Label>Edad</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({edad: txt})}
                value={this.state.edad}
                keyboardType="email-address"
                />
            </Item>
            <Item floatingLabel>
              <Label>Sexo (M/F)</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({sexo: txt})}
                value={this.state.sexo}

                />
            </Item>
            <Item floatingLabel last>
              <Label>Alergias</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({alergias: txt})}
                value={this.state.alergias}

                />
            </Item>
            <Item floatingLabel last>
              <Label>Resumen clínico</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({basic: txt})}
                value={this.state.basic}

                />
            </Item>

            <Item floatingLabel last>
              <Label>Fecha (dd/mm/aaaa)</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({date: txt})}
                value={this.state.date}

                />
            </Item>
            <Item floatingLabel last>
              <Label>Tratamientos del día</Label>
              <Input
                style={styles.signTxt}
                onChangeText={(txt) => this.setState({duty: txt})}
                value={this.state.duty}

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
    firebase.database().ref('pacientes').push({
       name:this.state.yourFullName,
       age:this.state.edad,
       basic:this.state.basic,
       date:this.state.date,
       duty:this.state.duty,
       sexo:this.state.sexo,
       alergias:this.state.alergias,
       medication:this.state.medication
    });

}
}
