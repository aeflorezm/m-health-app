import React from 'react';
import { View, StatusBar } from 'react-native';
import { Title, Header, Left, Right, Body } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default class HeaderSign extends React.Component {
  render() {
    return (
        <View style={{backgroundColor: '#1E88E5'}}>
            <Header style={{backgroundColor: '#1E88E5', marginTop: 20, elevation: 0}}>
                <Left>
                    <AntDesign color={'white'} name="left" size={25} onPress={() => Actions.pop()}/>

                </Left>
                <Body>
                    <Title style={{color: 'white', fontFamily: 'Product-Sans-Regular'}}>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
            <StatusBar barStyle="light-content" />
        </View>
    );
  }
}
