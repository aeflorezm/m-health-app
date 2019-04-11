import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight,
    Animated, ScrollView, Dimensions, TouchableOpacity,FlatList, ActivityIndicator} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';

import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderBack';
export default class Cerotres extends React.Component {
  render() {
    return (
      <View style={styles.drawerContainer}>
      <HeaderDefault style={styles.textLog} title=""/>
      <Content padder style={styles.container}>
        <TouchableOpacity  style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Pacientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPac}>
          <Text style={styles.textLog}>Paciente</Text>
        </TouchableOpacity>
        </Content>
      </View>
    );
  }
}
