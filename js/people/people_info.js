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
          <View style={[this.rootStyleBase().peopleInfoBg]}>
            <View style={this.rootStyleBase().peopleInfoRadius}>
              <Image style={[this.rootStyleBase().peopleInfoImg,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_img')}></Image>
            </View>
            <View style={this.rootStyleBase().peopleInfoCard}>
              <View style={this.rootStyleBase().peopleInfoCardCell}>
                <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_carda')}></Image>
              </View>
              <View style={this.rootStyleBase().peopleInfoCardCell}>
                <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_cardb')}></Image>
              </View>
              <View style={this.rootStyleBase().peopleInfoCardCell}>
                <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_cardc')}></Image>
              </View>

            </View>
          </View>
        </View>

      )
  }



}
