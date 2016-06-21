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
        <View>
          <View style={this.rootStyleBase().peopleInfoTop}>
            <View style={[this.rootStyleBase().peopleInfoBg]}>
              <View style={this.rootStyleBase().peopleInfoRadius}>
                <Image style={[this.rootStyleBase().peopleInfoImg,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_img')}></Image>
              </View>
              <View style={this.rootStyleBase().peopleInfoCard}>
                <View style={this.rootStyleBase().peopleInfoCardCell}>
                  <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_carda')}></Image>
                  <Text style={[this.rootStyleBase().peopleInfoCardText,this.rootStyleBase().peopleInfoCardBorder]}>{this.rootLangBase('people_info_carda')}</Text>
                </View>
                <View style={this.rootStyleBase().peopleInfoCardCell}>
                  <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_cardb')}></Image>
                  <Text style={[this.rootStyleBase().peopleInfoCardText,this.rootStyleBase().peopleInfoCardBorder]}>{this.rootLangBase('people_info_cardb')}</Text>
                </View>
                <View style={this.rootStyleBase().peopleInfoCardCell}>
                  <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_cardc')}></Image>
                  <Text style={this.rootStyleBase().peopleInfoCardText}>{this.rootLangBase('people_info_cardc')}</Text>
                </View>

              </View>
            </View>
          </View>
          <View style={[this.rootStyleBase().peopleInfoBox]}>
            <View>
              <Text style={this.rootStyleBase().peopleInfoAdd}>
                <Text  style={this.rootStyleBase().peopleInfoLine}>{this.rootLangBase('people_info_add_line')}</Text>
                  {this.rootLangBase('people_info_add_text')}
                <Text  style={this.rootStyleBase().peopleInfoLine}>{this.rootLangBase('people_info_add_line')}</Text>
                </Text>
            </View>
          </View>
          <View style={this.rootStyleBase().peopleInfoItem}>
            <View  style={this.rootStyleBase().peopleInfoItemBox}>
              <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_icona')}></Image>
              <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase('people_info_icona')}</Text>
            </View>
            <View  style={this.rootStyleBase().peopleInfoItemBox}>
              <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_iconb')}></Image>
              <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase('people_info_iconb')}</Text>
            </View>

          </View>
          <View style={this.rootStyleBase().peopleInfoItem}>
            <View  style={this.rootStyleBase().peopleInfoItemBox}>
              <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_iconc')}></Image>
              <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase('people_info_iconc')}</Text>
            </View>
            <View  style={this.rootStyleBase().peopleInfoItemBox}>
              <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_icond')}></Image>
              <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase('people_info_icond')}</Text>
            </View>

          </View>
        </View>

      )
  }



}
