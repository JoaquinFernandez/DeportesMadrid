/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const iOsAppodealKey = '8e485ea405f5f8e3f4f0814eb93c0cc65ce3d4f20465ef12';
const firebaseConfig = {
  apiKey: "AIzaSyAa8-I1pTAYLXN3wevuyPrCVE6nWu8nMrE",
  authDomain: "deportesmadrid-ios.firebaseapp.com",
  databaseURL: "https://deportesmadrid-ios.firebaseio.com",
  projectId: "deportesmadrid-ios",
  storageBucket: "deportesmadrid-ios.appspot.com",
  messagingSenderId: "799932750810"
};

import { showBanner, initializeAppodeal} from './actions/appodeal.js';
initializeAppodeal(iOsAppodealKey)
showBanner();

import { initFirebase } from './actions/firebase.js';
const firebaseApp = initFirebase(firebaseConfig);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DeportesMadrid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DeportesMadrid', () => DeportesMadrid);
