import React from 'react';
import { Platform } from 'react-native';
import { AppLoading, Font } from 'expo';
import Routes from './src_ios/routes/Routes';
import AndroidRoutes from './src_android/routes/Routes';
import FirebaseConfig from './FirebaseConfig';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      loading: true,
      isAuthenticationReady: false,
      isAuthenticated: false,
      fontsLoaded: false
    }
    // Initialize firebase...
  if (!firebase.apps.length) { firebase.initializeApp(FirebaseConfig.firebaseConfig); }
firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }
  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
}

  componentWillMount() {
    this.fontLoad();
  }

  async fontLoad() {
    await Font.loadAsync({
      //roboto
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      //product-sand (google)
      'Product-Sans-Bold': require('./assets/fonts/product-sans/Product-Sans-Bold.ttf'),
      '': require('./assets/fonts/product-sans/Product-Sans-Bold-Italic.ttf'),
      '': require('./assets/fonts/product-sans/Product-Sans-Italic.ttf'),
      '': require('./assets/fonts/product-sans/Product-Sans-Regular.ttf'),
      //
      // import your own font
      //
      'OpenSans-Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'OpenSans-ExtraBold': require('./assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf'),
      'OpenSans-Light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
      'OpenSans-Regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf')

    });

    this.setState({fontsLoaded: true, loading: false});
  }

  render() {
    if(this.state.loading === true) {
      return (
        <AppLoading />
      )
    }else{
      if(Platform.OS === 'ios') {
        return (
          <Routes />
        );
      }else{
        return (
          <AndroidRoutes />
        );
      }
    }
  }
}
