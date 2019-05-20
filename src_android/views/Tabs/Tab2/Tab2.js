import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Accordion,Text } from "native-base";
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderBack';
const dataArray = [
  { title: "Primer paciente", content: "this is a test message. Algo de texto algo de texto algo de texto algo de texto algo de ALGO DE TEXTO"},
  { title: "Segundo paciente", content: "Lorem ipsum dolor sit amet" },
  { title: "Tercer paciente", content: "Lorem ipsum dolor sit amet" },
  { title: "Cuarto Paciente", content: "Lorem ipsum dolor sit amet" },
  { title: "Quinto paciente", content: "Lorem ipsum dolor sit amet" },
  { title: "Sexto Paciente", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class Tab2 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Tab2"/>
        <Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        </Content>
      </View>
    );
  }
}
