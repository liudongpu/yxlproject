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

import PConfigBase from '../../p/config/p_config_base';

import CommonRoot from '../common/common_root';
import CommonForm from '../common/common_form';
import PeopleImage from './people_image';
import PStyleProject from '../../p/style/p_style_project';
import CommonHttp from '../common/common_url';


export default class PeopleReport  extends CommonRoot {

  constructor(props) {
    super(props);
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


  var   data = [
              {img:this.rootStyleImage('people_info_icona'),title:this.rootRouteList('PeopleReportA').title,target:CommonHttp,link:'PeopleReportA',url:'app_pressure',top:10},
              {img:this.rootStyleImage('people_info_iconb'),title:this.rootRouteList('PeopleReportB').title,target:CommonHttp,link:'PeopleReportB',url:'app_oxygen'},
              {img:this.rootStyleImage('people_info_iconc'),title:this.rootRouteList('PeopleReportC').title,target:CommonHttp,link:'PeopleReportC',url:'app_glucose'},
              {img:this.rootStyleImage('people_info_icond'),title:this.rootRouteList('PeopleReportD').title,target:CommonHttp,link:'PeopleReportD',url:'app_temperature'},
              ];

    this.state = {
      dataSource: ds.cloneWithRows(data)
    };


  }



  render(){
      return (
        <View  style={this.rootStyleBase().container}>
          <View style={this.rootStyleBase().homeUserViewBack}>
            <ListView

            dataSource={this.state.dataSource}
            renderRow={this.renderNews.bind(this)}
             />
           </View>
        </View>

      )
  }

  onPressNews(news) {
    var oProp={};
    oProp[PConfigBase.upDefineConfig().nparamsPage]='http://wx.jk.yxl9.cn/yhmanage/web/wxface/'+news.url+'?u_member_code=MI150520100001';
      this.rootNavPage(news.link,news.target,oProp);
  }

  renderNews(news) {

    return (
        <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
            <View style={news.top>0?this.rootStyleBase().cListIconSplit:{}}>
                <View style={this.rootStyleBase().cListIconItem}>
                    <View  style={this.rootStyleBase().cListIconLeft}>
                      <Image
                      source={news.img}
                      style={this.rootStyleBase().cListIconImage} />
                    </View>
                    <View style={[this.rootStyleBase().cListIconCenter,news.top?{}:this.rootStyleBase().cListIconBorder]}>
                      <Text style={this.rootStyleBase().cListIconText}>{news.title}</Text>
                    </View>

                    <View style={[this.rootStyleBase().cListIconRight,news.top?{}:this.rootStyleBase().cListIconBorder]}>
                        <Text style={this.rootStyleBase().cListIconLink}>{'>'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }



}
