import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight,
   Animated, ScrollView, Dimensions,TouchableOpacity,FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Content } from 'native-base';
import { List } from 'react-native-paper';
import styles from '../../../assets/styles/styles';
import HeaderDefault from '../../components/Header/HeaderBack';
export default class Integracion extends React.Component {
  render() {
    return (
      <View style={styles.drawerContainer}>
      <HeaderDefault style={styles.textLog} title=""/>
      <Content padder style={styles.container}>
      <FlatList
         data={[
           {key: 'Profilaxis y vacunas (malaria)'},
           {key: 'Osteoporosis en mujeres postmenopausicas'},
           {key: 'Intoxicación etilica'},
           {key: 'Tunel carpiano'},
           {key: 'Osteoartritis'},
           {key: 'Fiebre en niños'},
           {key: 'Sinusitis'},
           {key: 'TBA1'},
           {key: 'TBA2'},
           {key: 'TBA3'},
           {key: 'TBA4'},
         ]}
         renderItem={({item}) => <Text style={styles.textLog}>{item.key}</Text>}
         />

        </Content>
      </View>
    );
  }
}
