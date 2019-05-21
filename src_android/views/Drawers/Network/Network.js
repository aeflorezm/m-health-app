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


    firebase.database().ref('pacientes/0').set(
        {
            name: 'Andrés Flórez',
            age: 21,
            date:'1/05/2019',
            basic:' Paciente masculino diagnosticado con hipertensión arterial hace dos horas.Sin dieta especial.Lleva acompañamiento cardiológico permanente. Uĺtima toma de presión: hace 10 horas',
            duty:'Toma de presión a las 11:00 pm',
            medication:'comosalmeterol cada 12 hora'

        }
    )



    firebase.database().ref('pacientes/1').set(
        {
            name: 'Blanca Ruiz',
            age: 74,
            date:'12/05/2019',
            basic:' Paciente  femenimo diagnosticado con bronquitis crónica. Antecedentes de asma. Toma de signos vitales y de presión cada 12 horas. Ultima vez: hace 4 horas.',
            duty:'Toma de temperatura a las 3:00pm y cambio de vendaje',
            medication:'comosalmeterol cada 12 hora'

        }
    )

    firebase.database().ref('pacientes/2').set(
        {
          name: 'Tatiana María Bello',
          age: 24,
          date:'20/05/2019',
          basic:' Paciente  femenimo diagnosticado pancreatitis aguda.',
          duty:'Preparación para liquidos intravenosos 5:00pm',
          medication:'Lidocaina cada 24 horas'
        }
    )
    firebase.database().ref('pacientes/3').set(
        {
          name: 'Tatiana María Bello',
          age: 24,
          date:'20/05/2019',
          basic:' Paciente  femenimo diagnosticado pancreatitis aguda.',
          duty:'Preparación para liquidos intravenosos 5:00pm',
          medication:'Lidocaina cada 24 horas'
        }
    )
    firebase.database().ref('pacientes/3').set(
        {
          name: 'Luciana Rodríguez',
          age: 0,
          date:'14/05/2019',
          basic:'Sepsis neonatal por virus de herpes simple.',
          duty:'Toma de muestras de sangre 3:20 am',
          medication:'Acetaminofén e Ibuprofeno cada 8 horas'
        }
    )
    firebase.database().ref('pacientes/4').set(
        {
          name: 'Jesús Vasquez',
          age: 80,
          date:'10/05/2019',
          basic:'Paciente masculino diagnosticado con nefropatía diabética,hipertiroidismo e hipertensión.',
          duty:'7:30 pm Toma de signos vitales y exámenes de orina',
          medication:'Acetaminofén, Multivitamínicos, Carvedilol '
        }
    )
    firebase.database().ref('pacientes/5').set(
        {
          name: 'Samir Abud',
          age: 4,
          date:'17/05/2019',
          basic:' Paciente masculino diagnosticado cardiopatía isquémica.Presenta nauseas, vomito, frecuencia cardiaca alta.',
          duty:'Apoyo respiratorio 5:05 am ',
          medication:'Ibuprofeno cada 24 horas'
        }
    )
    firebase.database().ref('pacientes/6').set(
        {
          name: 'Will smith ',
          age: 56,
          date:'21/05/2019',
          basic:' Paciente infartado y con antecedentes de hipertensión arterial.',
          duty:'Reanimación 12:05 am',
          medication:'Nitroglicerina'
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
//firebase.database().ref('users/004').update({
    //name: 'Pheng Sengvuthy'
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
