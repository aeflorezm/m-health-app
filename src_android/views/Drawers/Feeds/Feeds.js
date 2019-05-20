import React from 'react';
import { View, ActivityIndicator, Image,ScrollView } from 'react-native';
import { Text, Content, Card, CardItem, Thumbnail, Left, Body, Right,Icon,Button } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import axios from 'axios';

export default class Feeds extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: []
    }
  }



  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Inicio"/>
        <Content padder>
        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                 Últimas interacciones
                             </Text>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../../assets/images/paciente1.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>

                <Image source={require('../../../../assets/images/emergency.jpeg')}
                 style={{height: 100, width: null, flex: 1}}/>
                 </CardItem>


                <CardItem >
                <Body>
                <Text>
                Hi~{"\n"}
                this is a test message.~{"\n"}
                Algo de texto algo de texto algo de texto algo de texto algo de~{"\n"}
                ALGO DE TEXTO

                </Text>
              </Body>
            </CardItem>

          </Card>
          <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../../../assets/images/paciente2.jpeg')} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem >
          <Body>
          <Text>
          Hi~{"\n"}
          this is a test message.~{"\n"}
          Algo de texto algo de texto algo de texto algo de texto algo de~{"\n"}
          ALGO DE TEXTO

          </Text>
        </Body>
      </CardItem>

    </Card>

    <Card style={{flex: 0}}>
    <CardItem>
      <Left>
        <Thumbnail source={require('../../../../assets/images/paciente3.jpeg')} />
        <Body>
          <Text>NativeBase</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem >
    <Body>
    <Text>
    Hi~{"\n"}
    this is a test message.~{"\n"}
    Algo de texto algo de texto algo de texto algo de texto algo de~{"\n"}
    ALGO DE TEXTO

    </Text>
  </Body>
</CardItem>

</Card>

  </Content>
      </View>
    );
  }


}
