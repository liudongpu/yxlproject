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

import PStyleProject from '../../p/style/p_style_project';

import CommonRoot from '../common/common_root';

import SFuncEvent from '../../s/func/s_func_event';
import SFuncStorage from '../../s/func/s_func_storage';


export default class UserLogin  extends CommonRoot {

  constructor(props) {
    super(props);
    this.state={};
  }

  onLogin()
  {
    this.rootFuncApi().post("api/genapp/post/userlogin",{
      loginName:this.state.name,
      loginPass:this.state.pass
    },(data)=>{this.fetchSuccess(data)});
  }
  fetchSuccess(data)
  {

    //SFuncStorage.inItem('user','user_token',data.token);
    //SFuncStorage.inItem('user','user_name',this.state.name);
    SFuncStorage.inItem('user','userLogin',{token:data.token,loginName:this.state.name },()=>{
      SFuncEvent.fireEvent('home_index_refresh_data');
      this.rootNavBack();
  });

    ;


  }

  render(){
    return (
      <View style={[this.rootStyleBase().container]}>
        <View style={PStyleProject.userLoginBox}>
          <Text style={PStyleProject.userLoginTitle}>{this.rootLangBase('user_login_title')}</Text>
          <View style={PStyleProject.userLoginItem}>
            <Text style={PStyleProject.userLoginLabel}>{this.rootLangBase('user_login_name')}</Text>
            <TextInput keyboardType='numeric' placeholder={this.rootLangBase('user_login_pa')} style={PStyleProject.userLoginInput}
            onChangeText={(text) => this.setState({name:text})}
            value={this.state.name} />
          </View>
          <View style={PStyleProject.userLoginItem}>
            <Text style={PStyleProject.userLoginLabel}>{this.rootLangBase('user_login_pass')}</Text>
            <TextInput secureTextEntry={true} placeholder={this.rootLangBase('user_login_pb')} style={PStyleProject.userLoginInput}
            onChangeText={(text) => this.setState({pass:text})}
            value={this.state.pass}/>
          </View>
          <TouchableOpacity style={PStyleProject.userLoginButton} onPress={()=>this.onLogin()}>
            <Text style={PStyleProject.userLoginBtxt}>{this.rootLangBase('user_login_button')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }



}
