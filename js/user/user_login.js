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

export default class UserLogin  extends CommonRoot {

  constructor(props) {
    super(props);
    this.state={};
  }

  onLogin()
  {

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
          <TouchableOpacity style={PStyleProject.userLoginButton} onPress={this.onLogin}>
            <Text style={PStyleProject.userLoginBtxt}>{this.rootLangBase('user_login_button')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }



}
