import React from 'react';
import { View, Image } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import logo from '../../../../assets/images/social.png';
export default class About extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Quiénes somos"/>
        <Content padder>
          <Text style={styles.descTxt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitin
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Text style={styles.txtAbout}>
            Contáctanos
          </Text>
          <View style={styles.container}>
           <Image source={logo} style={styles.socialNetworks} />
          </View>
        </Content>
      </View>
    );
  }
}
