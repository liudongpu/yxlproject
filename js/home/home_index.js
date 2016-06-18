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
import CommonHeader from '../common/common_header';
import PageTemplate from '../page/page_template';

import PConfigBase from '../../p/config/p_config_base';
import PStyleBase from '../../p/style/p_style_base';


export default class HomeIndex extends Component {


  onPressFeed() {
   const { nav } = this.props;

       nav.push({name: 'PageTemplate'});
   }

    render() {

      return (
          <View style={PStyleBase.container}>

            <Text style={PStyleBase.welcome}>
              {this.props.title}
            </Text>
            <Text style={PStyleBase.welcome} onPress={this.onPressFeed.bind(this)}>
              mainmain
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
