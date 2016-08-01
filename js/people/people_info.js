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
import PeopleImage from './people_image';
import PeopleAgree from './people_agree';
import PeopleReport from './people_report';

export default class PeopleInfo  extends CommonRoot {

  constructor(props) {
        super(props);
        this.state = {
            memberCode:this.rootNavParams('pCode'),

        };
  }

  peopleBase()
  {
    var oParam={};
    oParam[this.rootConfigBase().upDefineConfig().nParamsForm]={member_code:this.state.memberCode};
    this.rootNavPage("PeopleBase",CommonForm,oParam);
  }

  render(){
      return (
        <View  style={this.rootStyleBase().container}>
          <View style={this.rootStyleBase().peopleInfoTop}>
            <View style={[this.rootStyleBase().peopleInfoBg]}>
              <View style={this.rootStyleBase().peopleInfoRadius}>
                <TouchableOpacity onPress={()=>{this.peopleBase()}} >
                  <Image style={[this.rootStyleBase().peopleInfoImg,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_img')}></Image>
                </TouchableOpacity>
              </View>
              <View style={this.rootStyleBase().peopleInfoCard}>
                {this._nodeCard('people_info_carda','PeopleImage',PeopleImage)}
                {this._nodeCard('people_info_cardb','PeopleAgree',PeopleAgree)}
                {this._nodeCard('people_info_cardc','PeopleReport',PeopleReport)}


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
            {this._nodeIcon('people_info_icond','PeopleTemperatureAdd')}


          </View>
        </View>

      )
  }

  _nodeCard(sCard,sPage,cForm)
  {
    return(
      <View style={this.rootStyleBase().peopleInfoCardCell}>
        <TouchableOpacity style={this.rootStyleBase().wCenter} onPress={()=>{this.rootNavPage(sPage,cForm,{pCode:this.state.memberCode})}} >
          <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage(sCard)}></Image>
          <Text style={[this.rootStyleBase().peopleInfoCardText,this.rootStyleBase().peopleInfoCardBorder]}>{this.rootLangBase(sCard)}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _nodeIcon(sIcon,sPage)
  {
    var oParam={};
    oParam[this.rootConfigBase().upDefineConfig().nParamsForm]={member_code:this.state.memberCode};

    return (
      <View style={this.rootStyleBase().peopleInfoItemBox}>
          <TouchableOpacity style={{flex:1}} onPress={()=>{this.rootNavPage(sPage,CommonForm,oParam)}}>
          <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage(sIcon)}></Image>


          <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase(sIcon)}</Text>
          </TouchableOpacity>
      </View>
    )
  }

}
