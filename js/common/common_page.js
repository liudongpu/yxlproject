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

export default class CommonPage extends CommonRoot {
  

  onPressFeed() {
     const { nav } = this.props;
         nav.pop();
  }



  render() {

    var sTitle=this.subTitle();

    var SubNode=(this.subNode());

    this.props.nav.title=sTitle;

    return (
        <View style={this.rootStyleBase().container}>
          <View style={this.rootStyleBase().headerView}>

            <Text style={this.rootStyleBase().welcome}>
              {sTitle}
            </Text>

            <Text style={PStyleBase.welcome} onPress={this.onPressFeed.bind(this)}>
              {sTitle}
            </Text>
          </View>
          <View>
              {SubNode}
          </View>
        </View>
    )
  }

}
