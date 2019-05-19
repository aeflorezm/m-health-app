import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TextInput,
   ScrollView, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderDefault';


export default class Cerotres extends React.Component {

  constructor(props)
   {
     super(props);

     this.state = { GridViewItems: [
       {key: 'Andres Florez'},//sincronizar con los pacientes que ingresa el doctor
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Rafael Tarrifa'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente Final'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente Final'},
       {key: 'Paciente x'},
       {key: 'Paciente x'},
       {key: 'Paciente Final'},

     ]}
   }


   GetGridViewItem (item) {

    Alert.alert(item);

    }

  render() {

    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault style={styles.txtAbout} title=""/>
        <View style={styles.gridContainer}>

        <FlatList

                 data={ this.state.GridViewItems }

                 renderItem={({item}) =><View style={styles.GridViewBlockStyle}>

                    <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>

                    </View>}

                 numColumns={3}

                />


      </View>
      </View>
    );
  }
}
