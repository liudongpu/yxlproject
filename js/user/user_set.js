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

export default class UserSet extends CommonPage {

  subTitle(){return 'page title';}

  subNode(){
      return (<Text >user_set</Text>)
  }



}
