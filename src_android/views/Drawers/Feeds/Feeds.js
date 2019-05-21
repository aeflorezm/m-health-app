import React from 'react';
import { View, ActivityIndicator, Image,ScrollView,TouchableOpacity,SafeAreaView,Platform} from 'react-native';
import { Text, Content, Card, CardItem, Thumbnail, Left, Body, Right,Icon,Button } from 'native-base';
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderDefault';
import * as firebase from 'firebase';
import Category from '../../../components/Explore/Category'
import axios from 'axios';

export default class Feeds extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      //paciente
      name0:'',
      age0:'',
      basic0:'',
      //paciente
      name1:'',
      age1:'',
      basic1:'',
      //paciente
      name2:'',
      age2:'',
      basic2:'',
      //paciente
      name3:'',
      age3:'',
      basic3:'',
      //paciente6
      name4:'',
      age4:'',
      basic4:'',
      //paciente
      name5:'',
      age5:'',
      basic5:'',
      //paciente
      name6:'',
      age6:'',
      basic6:'',


    }//corchete de acabar
   //Hi~{"\n"} para saltos de línea

  }

  componentWillMount() {
    //paciente0
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name0:JSON.stringify(Object.values(data)[0].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age0:JSON.stringify(Object.values(data)[0].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic0:JSON.stringify(Object.values(data)[0].basic)})
    });
    //paciente1
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name1:JSON.stringify(Object.values(data)[1].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age1:JSON.stringify(Object.values(data)[1].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic1:JSON.stringify(Object.values(data)[1].basic)})
    });
    //Paciente2
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name2:JSON.stringify(Object.values(data)[2].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age2:JSON.stringify(Object.values(data)[2].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic2:JSON.stringify(Object.values(data)[2].basic)})
    });
    //paciente 3
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name3:JSON.stringify(Object.values(data)[3].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age3:JSON.stringify(Object.values(data)[3].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic3:JSON.stringify(Object.values(data)[3].basic)})
    });
    //paciente 4
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name4:JSON.stringify(Object.values(data)[4].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age4:JSON.stringify(Object.values(data)[4].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic4:JSON.stringify(Object.values(data)[4].basic)})
    });
    //paciente5
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name5:JSON.stringify(Object.values(data)[5].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age5:JSON.stringify(Object.values(data)[5].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic5:JSON.stringify(Object.values(data)[5].basic)})
    });
    //paciente6
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name6:JSON.stringify(Object.values(data)[6].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({age6:JSON.stringify(Object.values(data)[6].age)})
    });
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({basic6:JSON.stringify(Object.values(data)[6].basic)})
    });

  }



  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Inicio"/>
        <Content padder>
<Text style={{ fontSize: 24, fontWeight: '700', alignItems: 'center' }}>
    Últimos eventos
</Text>
        <TouchableOpacity>
        <Card >
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../../assets/images/paciente0.jpg')} />

                <Body>
                  <Text>{this.state.name0}</Text>
                  <Text note>{this.state.age0}</Text>
                </Body>
              </Left>
              </CardItem>
              <CardItem>
                <Body>
                <Text>
                {this.state.basic0}


                </Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>

          <Card >
          <CardItem>
            <Left>
              <Thumbnail source={require('../../../../assets/images/paciente1.jpg')} />
              <Body>
                <Text>{this.state.name1}</Text>
                <Text note>{this.state.age1}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem >
          <Body>
          <Text>
          {this.state.basic1}



          </Text>
        </Body>
      </CardItem>

    </Card>

    <Card>
    <CardItem>
      <Left>
        <Thumbnail source={require('../../../../assets/images/paciente2.jpg')} />
        <Body>
          <Text>{this.state.name2}</Text>
          <Text note>{this.state.age2}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem >
    <Body>
    <Text>
    {this.state.basic2}

    </Text>
  </Body>
</CardItem>

</Card>
<Card >
<CardItem>
  <Left>
    <Thumbnail source={require('../../../../assets/images/paciente3.jpg')} />
    <Body>
      <Text>{this.state.name3}</Text>
      <Text note>{this.state.age3}</Text>
    </Body>
  </Left>
</CardItem>
<CardItem >
<Body>
<Text>
{this.state.basic3}



</Text>
</Body>
</CardItem>

</Card>
<Card >
<CardItem>
  <Left>
    <Thumbnail source={require('../../../../assets/images/paciente4.jpg')} />
    <Body>
      <Text>{this.state.name4}</Text>
      <Text note>{this.state.age4}</Text>
    </Body>
  </Left>
</CardItem>
<CardItem >
<Body>
<Text>

{this.state.basic4}


</Text>
</Body>
</CardItem>
</Card>

<Card >
<CardItem>
  <Left>
    <Thumbnail source={require('../../../../assets/images/paciente5.jpg')} />
    <Body>
      <Text>{this.state.name5}</Text>
      <Text note>{this.state.age5}</Text>
    </Body>
  </Left>
</CardItem>
<CardItem >
<Body>
<Text>
{this.state.basic5}


</Text>
</Body>
</CardItem>

</Card>

<Card >
<CardItem>
  <Left>
    <Thumbnail source={require('../../../../assets/images/paciente6.jpg')} />
    <Body>
      <Text>{this.state.name6}</Text>
      <Text note>{this.state.age6}</Text>
    </Body>
  </Left>
</CardItem>
<CardItem >
<Body>
<Text>
{this.state.basic6}



</Text>
</Body>
</CardItem>

</Card>

  </Content>
      </View>
    );
  }


}
