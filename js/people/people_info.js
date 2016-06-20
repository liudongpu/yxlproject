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

export default class PeopleInfo  extends CommonPage {

  constructor(props) {
        super(props);
        this.state = {
            memberCode:this.rootNavParams('pCode'),

        };
  }

  


  subTitle(){return 'page title';}


  subNode(){
      return (<Text>{this.state.memberCode}</Text>)
  }



}
