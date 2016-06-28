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

export default class UserPassword extends CommonRoot {

  constructor(props)
  {
    super(props);
    var {pField} = this.props;

    this.state={oldPassword:'',newPassword:'',repPassword:''};
  }

  btnPress()
  {
    this.rootFuncApi().post("api/zooweb/post/managerpassword",this.state,(data)=>{ this.rootNavBack()  });
  }


  render()
  {
    return (
    <View style={[this.rootStyleBase().container,this.rootStyleBase().cFormPageBack]}>
      <View  style={this.rootStyleBase().wHeightB}></View>
      <View style={this.rootStyleBase().cFormPageItem}>
        <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{this.rootLangBase('user_password_a')}</Text></View>
        <View style={this.rootStyleBase().cFormPageCenter}>
          <TextInput autoCapitalize='none' autoCorrect={false} style={this.rootStyleBase().cFormTextInput} onChangeText={(text) => {this.setState({oldPassword:text})}} placeholder={this.rootLangBase('user_password_ra')} value={this.state.oldPassword}></TextInput>
        </View>
      </View>
      <View  style={this.rootStyleBase().wHeightB}></View>
      <View style={this.rootStyleBase().cFormPageItem}>
        <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{this.rootLangBase('user_password_b')}</Text></View>
        <View style={this.rootStyleBase().cFormPageCenter}>
          <TextInput autoCapitalize='none' autoCorrect={false} style={this.rootStyleBase().cFormTextInput} onChangeText={(text) => {this.setState({newPassword:text})}} placeholder={this.rootLangBase('user_password_rb')} value={this.state.newPassword}></TextInput>
        </View>
      </View>
      <View style={this.rootStyleBase().cFormPageItem}>
        <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{this.rootLangBase('user_password_c')}</Text></View>
        <View style={this.rootStyleBase().cFormPageCenter}>
          <TextInput autoCapitalize='none' autoCorrect={false} style={this.rootStyleBase().cFormTextInput} onChangeText={(text) => {this.setState({repPassword:text})}} placeholder={this.rootLangBase('user_password_rc')} value={this.state.repPassword}></TextInput>
        </View>
      </View>

      <View >


        <TouchableOpacity style={[PStyleProject.userLoginButton,PStyleProject.userSetBtn]} onPress={()=>this.btnPress()}>
          <Text style={PStyleProject.userLoginBtxt}>{this.rootLangBase('user_password_btn')}</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }


}
