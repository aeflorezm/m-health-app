import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import styles from '../../../../assets/styles/styles';
import { StyleSheet, View, TextInput } from 'react-native';

export default class HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
  };

  render() {
    return (
      <View style={styles.containerBarcode}>
      <HeaderDefault style={styles.txtAbout} title="Regresar"/>
        <TextInput
          style={styles.inputBarcode}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={{user: '2051020@gmail.com', loyaltyId: 'fasdfasdf'}}
          size={200}
          bgColor='purple'
          fgColor='white'/>
      </View>
    );
  }
}
