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
      info: 'vacio',
      nombre: 'Luis Florez',
      edad: '47',
      nuevoUsuario:[],
      contadorPacientes : 0,
      info2: 'vacio2'
    }

  }
  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault style={styles.txtAbout} title=""/>
        <Content padder style={styles.container}>
        <Text style={styles.txtAbout}>TEXTO</Text>
        <TouchableOpacity onPress={() => this.agregarUsuario()} style={styles.btn03}>
          <Text style={styles.textLog}>{this.state.info}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.agregarPaciente()} style={styles.btn36}>
          <Text style={styles.textLog}>{this.state.info2}</Text>
        </TouchableOpacity>


      </Content>
      </View>
    );
  }
  agregarUsuario(){
    //AGREGA USUARIO
    //firebase.database().ref('usuarios').push({
      // name:this.state.nombre
    //});
    firebase.database().ref().child('usuarios').orderByChild('name').equalTo('Ana Raquel').on("value",
    function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(data) {
        console.log(data.key);
    });
    });
    //REEMPLAZA USUARIO BORRA CON LO QUE SE LE PONE
    //firebase.database().ref('usuarios/usr').set(
        //{
          //  name: 'Ana Raquel',
            //age: 22
        //}
    //)

    firebase.database().ref('usuarios').on('value', (data) => {
            data.toJSON();
        })

    firebase.database().ref('usuarios').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({info:JSON.stringify(Object.values(data)[2].age)})
      })

  }

  agregarPaciente(){



    firebase.database().ref('pacientes/1').set(
        {
            name: 'Andres Elías',
            age: 22
        }
    )

    firebase.database().ref('pacientes/3').set(
        {
            name: 'Perreo intenso',
            age: 23
        }
    )

    //firebase.database().ref('pacientes').on('value', (data) => {
            //console.log(data.toJSON());
        //})

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data2 = snapshot.val();
      this.setState({info2:JSON.stringify(Object.values(data2)[2].name)})
      console.log(snapshot.toJSON());
      })



    // To Await 5 seconds to insert a new user


    //setTimeout(() => {
    //firebase.database().ref('users/004').set(
      //  {
        //    name: 'Pheng Sengvuthy 004',
          //  age: 24
      //  }
    //).then(() => {
      //  console.log('INSERTED !');
  //  }).catch((error) => {
        //console.log(error);
    //});
    //}, 5000);

// To Update a user
firebase.database().ref('users/004').update({
    name: 'Pheng Sengvuthy'
});


        // To Update a user
        //firebase.database().ref('users/004').update({
            //name: 'Pheng Sengvuthy'
        //});
        //AQUI EMPIEZA OTRO METODO
        // To Remove a user
        //firebase.database().ref('users/004').remove();

  }
}
