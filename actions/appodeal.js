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

var initialized = false

export function initializeAppodeal(key) {
  if (!initialized) {
    Appodeal.initializeWithApiKey(key, INTERSTITIAL + BANNER);
    Appodeal.setTesting(true);
    initialized = true;
  }
}

export function showBanner() {
  Appodeal.show(BANNER_BOTTOM, (result) => { console.log(result);});
}

export function hideBanner() {
  Appodeal.hideBanner();
}
