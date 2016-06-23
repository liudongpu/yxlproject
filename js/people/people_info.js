'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


import CommonRoot from '../common/common_root';
import CommonForm from '../common/common_form';


export default class PeopleInfo  extends CommonRoot {

  constructor(props) {
        super(props);
        this.state = {
            memberCode:this.rootNavParams('pCode'),

        };
  }



  render(){
      return (
        <View  style={this.rootStyleBase().container}>
          <View style={this.rootStyleBase().peopleInfoTop}>
            <View style={[this.rootStyleBase().peopleInfoBg]}>
              <View style={this.rootStyleBase().peopleInfoRadius}>
                <Image style={[this.rootStyleBase().peopleInfoImg,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_img')}></Image>
              </View>
              <View style={this.rootStyleBase().peopleInfoCard}>
                {this._nodeCard('people_info_carda')}
                {this._nodeCard('people_info_cardb')}
                {this._nodeCard('people_info_cardc')}


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
            {this._nodeIcon('people_info_icona','PeoplePressureAdd')}
            {this._nodeIcon('people_info_iconb','PeopleOxygenAdd')}

          </View>
          <View style={this.rootStyleBase().peopleInfoItem}>
            {this._nodeIcon('people_info_iconc','PeopleGlucoseAdd')}
            {this._nodeIcon('people_info_icond','PeoplePressureAdd')}


          </View>
        </View>

      )
  }

  _nodeCard(sCard)
  {
    return(
      <View style={this.rootStyleBase().peopleInfoCardCell}>
        <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage(sCard)}></Image>
        <Text style={[this.rootStyleBase().peopleInfoCardText,this.rootStyleBase().peopleInfoCardBorder]}>{this.rootLangBase(sCard)}</Text>
      </View>
    )
  }

  _nodeIcon(sIcon,sPage)
  {
    return (
      <View style={this.rootStyleBase().peopleInfoItemBox}>
          <TouchableOpacity onPress={()=>{this.rootNavPage(sPage,CommonForm)}}>
          <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage(sIcon)}></Image>

          </TouchableOpacity>
          <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase(sIcon)}</Text>
      </View>
    )
  }

}
