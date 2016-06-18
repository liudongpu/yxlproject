'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    StyleSheet
} from 'react-native';


import CommonRoot from '../common/common_root';


export default class HomeUser extends CommonRoot {


  onPressFeed() {
    /*
   const { nav } = this.props;

       nav.push({name: 'PageTemplate',title:'xxx'});
    */
    this.rootNavPage('PageTemplate');
   }

    render() {

      return (
          <View style={this.rootStyleBase().container}>

            <Text style={this.rootStyleBase().welcome}>
              {this.props.title}
            </Text>
            <Text style={this.rootStyleBase().welcome} onPress={this.onPressFeed.bind(this)}>
              user
            </Text>
          </View>
      )
    }
}
