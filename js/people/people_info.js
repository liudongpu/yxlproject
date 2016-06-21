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




  subTitle(){}


  subNode(){
      return (
        <View style={this.rootStyleBase().peopleInfoTop}>
          <Image style={[this.rootStyleBase().peopleInfoBg,{resizeMode:Image.resizeMode.stretch}]}>
            <View style={this.rootStyleBase().peopleInfoRadius}>
              <Image style={[this.rootStyleBase().peopleInfoImg,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_img')}></Image>
            </View>

          </Image>
        </View>

      )
  }



}
