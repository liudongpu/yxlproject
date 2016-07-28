'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    ListView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


import CommonRoot from '../common/common_root';
import CommonForm from '../common/common_form';
import PeopleImage from './people_image';
import PStyleProject from '../../p/style/p_style_project';


export default class PeopleAgree  extends CommonRoot {

  constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            memberCode:this.rootNavParams('pCode'),
            dataSource: ds
        };


  }
  componentDidMount () {
    this.fetchData('');
  }
  fetchData (sText) {

      this.rootFuncApi().post("api/genapp/post/memberagree",{
        code:this.state.memberCode
      },(data)=>{this.fetchSuccess(data)});

  }
  fetchSuccess(oData)
  {
    this.setState({
        dataSource : this.state.dataSource.cloneWithRows(oData.pageData)
    });
  }


  render(){
      return (
        <View  style={this.rootStyleBase().container}>
          <ListView

          dataSource={this.state.dataSource}
          renderRow={this.renderNews.bind(this)}
           />
        </View>

      )
  }

  renderNews(news) {

    return (
      <View style={PStyleProject.peopleAgreeItemBox}>
        <Text style={PStyleProject.peopleAgreeItemDate}>{news.create_time}</Text>
        <Text style={PStyleProject.peopleAgreeItemInfo}>{this.rootLangBase('people_agree_agi')}</Text>
        <Text style={PStyleProject.peopleAgreeItemInfo}>{news.tour_info}</Text>
        <Text style={PStyleProject.peopleAgreeItemName}>{news.doctor_name}</Text>
        <Text style={PStyleProject.peopleAgreeItemAgree}>{this.rootLangBase('people_agree_agt')}</Text>
        <Text style={PStyleProject.peopleAgreeItemAgree}>{news.agree_info}</Text>

      </View>
    );
  }



}
