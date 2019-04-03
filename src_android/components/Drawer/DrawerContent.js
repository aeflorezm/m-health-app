import React from 'react';
import { View, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import { Content, Text, ListItem, List, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../../../assets/styles/styles';
import newUser from '../../../assets/icons/new-user.png';
import { AntDesign } from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
export default class DrawerContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        yourFullName: ''
    }
  }

  componentWillMount() {
    //
    // check login user this is for the sample data only since i dont have backend api. ignore this function
    //

    AsyncStorage.getItem('userData', (err, userData) => {
      var data = JSON.parse(userData);
      this.setState({yourFullName: data.yourFullName});
    });
    this.checkAvatar();
  }

  componentDidUpdate() {
      setTimeout(() => {
        this.checkAvatar();
      }, 1500);
  }

  componentWillUnmount() {
    this.checkAvatar();
  }

  checkAvatar() {
    AsyncStorage.getItem('avatarImg', (err, avatarImg) => {
        if(avatarImg === null || avatarImg === undefined || avatarImg === '') {
            return false;
        }else{
            this.setState({avatar: avatarImg});
        }
    });
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerTopContent}>

            <TouchableWithoutFeedback onPress={() => this.updateAvatar()}>
                <Thumbnail
                    large
                    source={{uri: this.state.avatar}}
                    />
            </TouchableWithoutFeedback>

            <View style={styles.profileWrapper}>
                <Text style={styles.drawerTxtProfileName}>{this.state.yourFullName}</Text>
            </View>
        </View>
        <View style={styles.drawerListContent}>
            <Content>
                <List>
                    <ListItem icon onPress={() => Actions.feeds()}>
                        <Left>
                            <FontAwesome name="home" size={20} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerTxtList}>Menú principal</Text>
                        </Body>
                        <Right />
                    </ListItem>
                    <ListItem icon onPress={() => Actions.desarrollo( Actions.midesarrollo())}>
                        <Left>
                            <AntDesign name="medicinebox" size={20} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerTxtList}>menu item</Text>
                        </Body>
                        <Right />
                    </ListItem>
                    <ListItem icon >
                        <Left>
                            <AntDesign name="areachart" size={20} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerTxtList}>Seguimiento</Text>
                        </Body>
                        <Right />
                    </ListItem>
                    <ListItem icon onPress={() => Actions.network()}>
                        <Left>
                            <Entypo name="network" size={20} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerTxtList}>menu item</Text>
                        </Body>
                        <Right />
                    </ListItem>
                    <ListItem icon onPress={() => Actions.about()}>
                        <Left>
                            <AntDesign name="infocirlceo" size={20} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerTxtList}>Quiénes somos</Text>
                        </Body>
                        <Right />
                    </ListItem>
                    <ListItem icon onPress={() => this.logout()}>
                        <Left>
                            <AntDesign name="poweroff" size={20} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerTxtList}>Cerrar sesión</Text>
                        </Body>
                        <Right />
                    </ListItem>
                </List>
            </Content>
        </View>
      </View>
    );
  }

  updateAvatar() {
    Actions.avatar({avatar: this.state.avatar});
  }

  logout() {
    AsyncStorage.removeItem('userLoggedIn');
    Actions.main({type: 'reset'});
  }
}
