'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Switch,
    Navigator,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


import CommonRoot from '../common/common_root';
import PStyleProject from '../../p/style/p_style_project';

import SFuncStorage from '../../s/func/s_func_storage';

import UserLogin from '../user/user_login';

var oTemp={flagNotice:0,flagMessage:0,flagLocal:0};

export default class UserSet extends CommonRoot {

  constructor(props)
  {
    super(props);
    this.state=oTemp;
  }

  btnPress()
  {
    SFuncStorage.delItem('user','userLogin',()=>{

      this.rootNavPage('UserLogin',UserLogin,{navType:'replace'});
    });
  }
  componentDidMount () {

    //this.rootNavMount('MainMain',()=>{this.fetchInit()});
    this.fetchInit('');


  }


  fetchInit(sOptType,sField,sValue)
  {


    this.rootFuncApi().post("api/genapp/post/userset",{
      optType:sOptType,
      ysUserSet:oTemp,
    },(data)=>{ if(sOptType==""){ this.setState(data.ysUserSet);oTemp=data.ysUserSet }  });
  }

  updateValue()
  {
    this.setState(oTemp);
    this.fetchInit('update');
  }


  render(){
      return (
        <View style={[this.rootStyleBase().container,this.rootStyleBase().cFormPageBack]}>
          <View  style={this.rootStyleBase().wHeightB}></View>
          <View  style={this.rootStyleBase().cFormPageItem}>
            <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{this.rootLangBase('user_set_notice')}</Text></View>
            <View style={this.rootStyleBase().cFormPageCenter}>
              <Switch
            onValueChange={(value) => {oTemp.flagNotice= value?1:0; this.updateValue()}}
            style={this.rootStyleBase().cFormSwitch}
            value={this.state.flagNotice==1?true:false} />
            </View>
          </View>
          <View  style={this.rootStyleBase().cFormPageItem}>
            <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{this.rootLangBase('user_set_local')}</Text></View>
            <View style={this.rootStyleBase().cFormPageCenter}>
              <Switch
            onValueChange={(value) =>{ oTemp.flagLocal= value?1:0;this.updateValue()} }
            style={this.rootStyleBase().cFormSwitch}
            value={this.state.flagLocal?true:false} />
            </View>
          </View>
          <View  style={this.rootStyleBase().wHeightB}></View>
          <View  style={this.rootStyleBase().cFormPageItem}>
            <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{this.rootLangBase('user_set_message')}</Text></View>
            <View style={this.rootStyleBase().cFormPageCenter}>
              <Switch
            onValueChange={(value) =>{ oTemp.flagMessage= value?1:0;this.updateValue()} }
            style={this.rootStyleBase().cFormSwitch}
            value={this.state.flagMessage?true:false} />
            </View>
          </View>

          <View >


            <TouchableOpacity style={[PStyleProject.userLoginButton,PStyleProject.userSetBtn]} onPress={()=>this.btnPress()}>
              <Text style={PStyleProject.userLoginBtxt}>{this.rootLangBase('user_set_logout')}</Text>
            </TouchableOpacity>
          </View>
        </View>

      )
  }



}
