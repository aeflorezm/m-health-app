import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
export default class Network extends React.Component {

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault style={styles.txtAbout} title=""/>
        <Content padder style={styles.container}>
        <Text style={styles.txtAbout}>TITULO</Text>
        <TouchableOpacity onPress={this.cerotres} style={styles.btn03}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn36}>
          <Text style={styles.textLog}>BOTÓN</Text>
        </TouchableOpacity>

      </Content>
      </View>
    );
  }
}
