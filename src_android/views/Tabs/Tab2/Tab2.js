import React from 'react';
import { View,ListView,Alert } from 'react-native';
import { Container, Header, Content,Form,Text,Input,Item,Button,Label,Icon,List, ListItem } from "native-base";
import styles from '../../../../assets/styles/styles';
import HeaderDefault from '../../../components/Header/HeaderBack';
import * as firebase from 'firebase';
var data= []
export default class Tab2 extends React.Component {

  constructor(props) {
    super(props)
    this.ds= new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      listViewData: data,
      newContact: "",
      prueba: "",
      //paciente
      name0:'',
      duty0:'',
      //paciente
      name1:'',
      duty1:'',
      //paciente
      name2:'',
      duty2:'',
      //paciente
      name3:'',
      duty3:'',
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
    }
  }
  componentWillMount() {
    //paciente0
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name0:JSON.stringify(Object.values(data)[0].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty0:JSON.stringify(Object.values(data)[0].duty)})
    });

    //paciente1
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name1:JSON.stringify(Object.values(data)[1].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty1:JSON.stringify(Object.values(data)[1].duty)})
    });
    //Paciente2
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name2:JSON.stringify(Object.values(data)[2].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty2:JSON.stringify(Object.values(data)[2].duty)})
    });
    //paciente 3
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name3:JSON.stringify(Object.values(data)[3].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty3:JSON.stringify(Object.values(data)[3].duty)})
    });
    //paciente 4
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name4:JSON.stringify(Object.values(data)[4].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty4:JSON.stringify(Object.values(data)[4].duty)})
    });
    //paciente5
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name5:JSON.stringify(Object.values(data)[5].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty5:JSON.stringify(Object.values(data)[5].duty)})
    });

    //paciente6
    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({name6:JSON.stringify(Object.values(data)[6].name)})
    });

    firebase.database().ref('pacientes').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({duty6:JSON.stringify(Object.values(data)[6].duty)})
    });

  }

  componentDidMount() {

      var that = this

      firebase.database().ref('/contacts').on('child_added', function (data) {

        var newData = [...that.state.listViewData]
        newData.push(data)
        that.setState({ listViewData: newData })

      })

    }

    addRow(data) {

      var key = firebase.database().ref('/contacts').push().key
      firebase.database().ref('/contacts').child(key).set({ name: data })
    }
    alertDuty(secId, rowId, rowMap, data) {
      //firebase.database().ref('contacts/' + data.key).on('value', (snapshot) => {
        //let data = snapshot.val();
        //let nameFind=JSON.stringify(Object.values(data)[rowId])
        //console.log(nameFind)
        //console.log(prueba)

        //})
        firebase.database().ref('pacientes').on('value', (snapshot) => {
          let data2 = snapshot.val();
          //this.setState({prueba:JSON.stringify(Object.values(data2)[rowId])})
          let prueba=JSON.stringify(Object.values(data2)[rowId].duty)
          Alert.alert('Tarea', prueba)
          //Object.keys(this)[index]
          //console.log(snapshot.toJSON());
          console.log(prueba)
          })




    }

    async deleteRow(secId, rowId, rowMap, data) {

      await firebase.database().ref('contacts/' + data.key).set(null)

      rowMap[`${secId}${rowId}`].props.closeRow();
      var newData = [...this.state.listViewData];
      newData.splice(rowId, 1)
      this.setState({ listViewData: newData });

    }

    showInformation() {

  }




  render() {
    return (
      <View style={styles.drawerContainer}>
        <HeaderDefault title="Tareas"/>
        <Content padder>
        <Item>
              <Input
                onChangeText={(newContact) => this.setState({ newContact })}
                placeholder="Add name"
              />
              <Button onPress={() => this.addRow(this.state.newContact)}>
                <Icon name="add" />
              </Button>
            </Item>

            <List
            leftOpenValue={75}
            rightOpenValue={-75}
            //enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data.val().name}</Text>
              </ListItem>
            }
            renderLeftHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full onPress={() => this.alertDuty(secId, rowId, rowMap, data) //
            }
              >
                <Icon name="information-circle" />
              </Button>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap, data)}>
                <Icon name="trash" />
              </Button>

            }


         />

        </Content>
      </View>
    );
  }
}
