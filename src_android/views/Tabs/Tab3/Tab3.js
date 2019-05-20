import React from 'react';
import { View } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderBack';

export default class Tab3 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Tab2"/>
        <Content padder>
          <Text style={styles.descTxt}>
            ESTO ES UNA PRUEBA DE TEXTO EN ESTA VENTANA, LOS COMPONENTES SE DECIDIRÁN DESPUÉS
            PARTE 2
          </Text>
        </Content>
      </View>
    );
  }
}
