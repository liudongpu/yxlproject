'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    Dimensions,
    StyleSheet
} from 'react-native';


import BarcodeScanner from 'react-native-barcode-scanner-universal';



export default class PageTest extends Component {

  render() {
    let scanArea = null;
    if (Platform.OS === 'ios') {
      scanArea = (
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle} />
        </View>
      )
    }

    return (
      <BarcodeScanner
        onBarCodeRead={(code) => console.warn(JSON.stringify(code))}
        style={styles.camera}>
        {scanArea}
      </BarcodeScanner>
    )
  }


}



const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
})
