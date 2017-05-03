/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
     AppRegistry,
     StyleSheet,
     Text,
     TouchableHighlight,
     View,
     NativeModules, //to access plugin
     NativeAppEventEmitter, //callbacks
     requireNativeComponent
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

var Appodeal = NativeModules.AppodealPlugin; //appodeal plugin
var NativeAdViewManagerPlugin = NativeModules.AppodealNativeAdViewManager; //native ad plugin
var AppodealNativeAdView; //native ad view to render
var INTERSTITIAL = 1;
var SKIPPABLE_VIDEO = 2;
var BANNER = 4;
var BANNER_BOTTOM = 8;
var BANNER_TOP = 16;
var NATIVE_AD = 32;
var REWARDED_VIDEO = 128;
var NON_SKIPPABLE_VIDEO = 256;

Appodeal.initializeWithApiKey('8e485ea405f5f8e3f4f0814eb93c0cc65ce3d4f20465ef12', INTERSTITIAL + BANNER);
Appodeal.setTesting(true);
Appodeal.show(BANNER_BOTTOM, (result) => { console.log(result);});

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
