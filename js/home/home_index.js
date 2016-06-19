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

import PageTemplate from '../page/page_template';


import PStyleBase from '../../p/style/p_style_base';
import CommonRoot from '../common/common_root';


export default class HomeIndex extends CommonRoot {

  constructor(props) {
          super(props);

      }
  onPressFeed() {
    /*
   const { nav } = this.props;

       nav.push({name: 'PageTemplate',title:'xxx'});
    */
    this.rootNavPage('PageTemplate',PageTemplate);
   }

    render() {
      //this.props.nav.setState({title:'xx'});

      return (
          <View>
            <Text style={PStyleBase.welcome} onPress={this.onPressFeed.bind(this)}>
              mainmain
            </Text>
          </View>
      )
    }
}
