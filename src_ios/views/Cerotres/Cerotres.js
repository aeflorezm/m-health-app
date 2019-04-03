import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight,
    Animated, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderBack';
export default class Cerotres extends React.Component {
  render() {
    return (
        <View style={styles.drawerContainer}>
        <HeaderDefault style={styles.textLog} title="BOTÓN"/>
        <Content padder style={styles.container}>
        <TouchableOpacity  onPress={() => Actions.desarrollo( Actions.integracion())} style={styles.btn03}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn36}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn69}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn912}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>
        </Content>
      </View>
    );
  }
}
