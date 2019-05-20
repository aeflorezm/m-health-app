import React from 'react';
import { View } from 'react-native';
import { Text, Content } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderBack';

export default class Tab1 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderDefault title="Tab1"/>
        <Content padder>
          <Text style={styles.descTxt}>
            This is a sample of navigation with tabs and drawer. You can use this to your project as a starter and improve this layout.
            Thanks and have fun. Happy Coding
          </Text>
        </Content>
      </View>
    );
  }
}
