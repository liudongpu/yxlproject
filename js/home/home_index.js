'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    StyleSheet
} from 'react-native';
import CommonHeader from '../common/common_header';

export default class HomeIndex extends Component {
    render() {

        return (
            <View style={styles.container}>
              <CommonHeader text="b"/>
              <Text style={styles.welcome}>
                HomeIndex
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ccontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
});
