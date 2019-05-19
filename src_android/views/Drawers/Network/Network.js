import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import * as firebase from 'firebase';
export default class Network extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: 'vacio'
    }

  }
  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault style={styles.txtAbout} title=""/>
        <Content padder style={styles.container}>
        <Text style={styles.txtAbout}>TEXTO</Text>
        <TouchableOpacity onPress={this.cerotres} style={styles.btn03}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.agregarPaciente()} style={styles.btn36}>
          <Text style={styles.textLog}>{this.state.info}</Text>
        </TouchableOpacity>


      </Content>
      </View>
    );
  }
  agregarPaciente(){
    firebase.database().ref('users').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({info:JSON.stringify(Object.values(data)[0].name)})
      })


    // To Await 5 seconds to insert a new user
            firebase.database().ref('users/004').set(
                {
                    name: 'Andres Elias 004',
                    age: 24
                }
            )
            //.then(() => {
              //  console.log('INSERTED !');
            //}).catch((error) => {
              //  console.log(error);
            //});


        // To Update a user
        //firebase.database().ref('users/004').update({
            //name: 'Pheng Sengvuthy'
        //});
        //AQUI EMPIEZA OTRO METODO
        // To Remove a user
        //firebase.database().ref('users/004').remove();

  }
}
