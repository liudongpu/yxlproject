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
import CommonHeader from '../common/common_page';

export default class CommonPage extends Component {
  constructor(props) {
          super(props);
          this.state = {};
      }

  onPressFeed() {
     const { nav } = this.props;
         nav.pop();
  }

  subTitle(){return 'page not found';}

  render() {

    var sTitle=this.subTitle();

    var SubNode=(this.subNode());

    return (
        <View style={PStyleBase.container}>
          <View style={PStyleBase.headerView}>

            <Text style={PStyleBase.welcome}>
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
