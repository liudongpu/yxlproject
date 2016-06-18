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

import PStyleBase from '../../p/style/p_style_base';

import CommonPage from '../common/common_page';

export default class PageTemplate extends CommonPage {

  subTitle(){return 'page title';}


  subNode(){
      return (<Text>my page</Text>)
  }



}
