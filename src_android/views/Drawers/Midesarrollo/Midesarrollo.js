import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
export default class Midesarrollo extends React.Component {
  render() {
    return (
      <View style={styles.drawerContainer}>
      <HeaderDefault style={styles.textLog} title="Menú principal"/>
      <Content padder style={styles.container}>
      <TouchableOpacity onPress={() => Actions.desarrollo( Actions.cerotres())} style={styles.btn03}>
        <Text style={styles.textLog}>Mis pacientes</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => Actions.desarrollo( Actions.integracion())}  style={styles.btn36}>
        <Text style={styles.textLog}>Protocolos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn69}>
        <Text style={styles.textLog}>Interacciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn912}>
        <Text style={styles.textLog}>ICD-10</Text>
      </TouchableOpacity>
      </Content>
      </View>
    );
  }


}
