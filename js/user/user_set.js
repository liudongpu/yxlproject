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
import PStyleProject from '../../p/style/p_style_project';

import SFuncStorage from '../../s/func/s_func_storage';

import UserLogin from '../user/user_login';

export default class UserSet extends CommonRoot {

  btnPress()
  {
    SFuncStorage.delItem('user','userLogin',()=>{

      this.rootNavPage('UserLogin',UserLogin,{navType:'replace'});
    });
  }

  render(){
      return (
        <View style={[this.rootStyleBase().container]}>
          <View >
            <TouchableOpacity style={[PStyleProject.userLoginButton,PStyleProject.userSetBtn]} onPress={()=>this.btnPress()}>
              <Text style={PStyleProject.userLoginBtxt}>{this.rootLangBase('user_set_logout')}</Text>
            </TouchableOpacity>
          </View>
        </View>

      )
  }



}
