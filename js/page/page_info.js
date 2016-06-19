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


import CommonPage from '../common/common_page';
import PageNew from '../page/page_two';

export default class PageInfo extends CommonPage {

  subTitle(){return 'page title';}
  onPressFeed() {

    this.rootNavPage('PageNew',PageNew);
   }

  subNode(){
      return (<Text onPress={this.onPressFeed.bind(this)}>my page</Text>)
  }



}
