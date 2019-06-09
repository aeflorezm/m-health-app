import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerGrid: {
      backgroundColor: '#fff',
      flexDirection: 'row' ,
      marginVertical:10
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
    padding: 10,
    height: 44,
  },
    containerLogo: {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    //
    // Main.js
    //

    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
 },
 GridViewContainer: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#7B1FA2'
},
GridViewTextLayout: {
  fontSize: 20,
  fontWeight: 'bold',
  justifyContent: 'center',
  color: '#fff',
  padding: 10,
},

    mainWrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo:  {
      width:180,
      height:220,
      paddingLeft:45,
      backgroundColor: '#fff',
      marginHorizontal:25,
      alignItems: 'center'
    },
    socialNetworks:  {
      width:200,
      height:200,
      paddingLeft:45,
      backgroundColor: '#fff',
      marginHorizontal:25,
      alignItems: 'center'
    },
    mainLogo: {
        fontFamily: 'Product-Sans-Regular',
        fontSize: 40,
        color: 'black'
    },
    txtAbout: {
        fontFamily: 'Product-Sans-Regular',
        fontSize: 50,
        fontWeight:'500',
        textAlign:'center',
        color: 'black'
    },
    inputUser:  {
      width: 300,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft:45,
      backgroundColor:"black",
      color:'rgba(255, 255, 255, 0.7)',
      marginHorizontal:25,
      marginVertical:40
  /**'rgba(0, 0, 0, 0.35)',*/
    },

    //
    // Button Theme
    //

    btnPrimary: {
        backgroundColor: '#ff7961',
        height: 80
    },
    btnSecondary: {
        backgroundColor: '#b6ffff',
        height: 80
    },
    btnSignup: {
        backgroundColor: '#efefef',
        height: 80
    },
    btnSignin: {
        backgroundColor: '#efefef',
        height: 80
    },
    btnStandar1: {
      width: 300,
      height: 45,
      paddingLeft:45,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginHorizontal:25,
      marginVertical:10,
      marginTop:-20
    },
    btnStandar2: {
      width: 300,
      height: 45,
      borderRadius: 25,
      paddingLeft:45,
      marginHorizontal:25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:10
    },
    textLog: {
      fontFamily: 'Product-Sans-Regular',
      color: "#000000",
      fontWeight: '500',
      marginVertical: 15,
      fontSize: 20,
      textAlign:'center',
      paddingLeft:10

    },
    btnPediatria: {
      width: 280,
      height: 80,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:35

    },
    btnOtrosPadres: {
      width: 280,
      height: 80,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:35

    },
    btnPac: {
      width: 280,
      height: 40,
      justifyContent:'center' ,
      backgroundColor:'#ffab50' ,
      textAlign:'center' ,
      marginTop:35

   },
    btn03: {
      width: 280,
      height: 80,
      borderRadius: 25,
      justifyContent:'center' ,
      backgroundColor:'#ffab50' ,
      textAlign:'center' ,
      marginTop:35

   },
   btn36: {
     width: 280,
     height: 80,
     borderRadius: 25,
     justifyContent:'center' ,
     backgroundColor:'#ffab50' ,
     textAlign:'center' ,
     marginTop:35

   },
   btn69: {
     width: 280,
     borderRadius: 25,
     height: 80,
     backgroundColor:'#ffab50' ,
     justifyContent:'center' ,
     textAlign:'center' ,
     marginTop:35

   },
   btn912: {
     width: 280,
     height: 80,
     borderRadius: 25,
     backgroundColor:'#ffab50' ,
     justifyContent:'center' ,
     textAlign:'center' ,
     marginTop:35

   },
   //pacientes
   GridViewBlockStyle: {

  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#00BCD4'

},

containerBarcode: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
},

inputBarcode: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
},

GridViewInsideTextItemStyle: {

   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',

 },
 actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

    btnTxt: {
        fontFamily: 'Product-Sans-Regular',
        color: "black",
        fontSize: 17,
        textAlign:'center',
        fontWeight:'bold',
        fontWeight:'500'
    },

    // sign in/sign up
    signWrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    signTxt: {
      fontFamily: 'Product-Sans-Regular'
    },


    //
    // DrawerContent.js
    //
    drawerTopContent: {
        flex: 1,
        backgroundColor: '#1E88E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerListContent: {
        flex: 2
    },
    profileWrapper: {
        marginTop: 20
    },
    drawerTxtProfileName: {
        fontFamily: 'Product-Sans-Regular',
        fontSize: 20,
        color: 'black'
    },
    drawerTxtList: {
        fontFamily: 'Product-Sans-Regular',
    },

    //
    // Content inside drawer
    // Home.js/About.js/Avatar.js
    separatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTxt: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    subTitleTxt: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
    },
    descTxt: {
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        textAlign: 'justify'
    }

  });
export default styles;
