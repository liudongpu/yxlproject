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

export default class UserAgree extends CommonPage {

  subTitle(){return 'page title';}

  subNode(){
      return (<Text >UserAgree</Text>)
  }



}
