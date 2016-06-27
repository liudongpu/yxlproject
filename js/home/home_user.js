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

import PageInfo from '../page/page_info';
import UserSet from '../user/user_set';
import UserPassword from '../user/user_password';
import UserAgree from '../user/user_agree';
import UserAbout from '../user/user_about';
import SFuncEvent from '../../s/func/s_func_event';
import SFuncStorage from '../../s/func/s_func_storage';
import CommonForm from '../common/common_form';



import CommonRoot from '../common/common_root';


export default class HomeUser extends CommonRoot {



    constructor(props) {
      super(props);
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    var   data = [
                {img:this.rootStyleImage('icon_ua'),title:this.rootRouteList('UserInfo').title,target:CommonForm,link:'UserInfo',top:10},
                {img:this.rootStyleImage('icon_ub'),title:this.rootRouteList('UserSet').title,target:UserSet,link:'UserSet'},
                {img:this.rootStyleImage('icon_uc'),title:this.rootRouteList('UserPassword').title,target:UserPassword,link:'UserPassword',top:10},
                {img:this.rootStyleImage('icon_ud'),title:this.rootRouteList('UserAgree').title,target:UserAgree,link:'UserAgree'},
                {img:this.rootStyleImage('icon_ue'),title:this.rootRouteList('UserAbout').title,target:UserAbout,link:'UserAbout'}
                ];

      this.state = {
        dataSource: ds.cloneWithRows(data),
        loginName:SFuncStorage.upTempValue('user','loginName')
      };


      SFuncEvent.addEvent('home_user_refresh_data',()=>{this.homeInit()});
    }

    homeInit()
    {
      var sLogin=SFuncStorage.upTempValue('user','loginName');

      this.setState({loginName:sLogin});
    }



    render() {


      return (
        <View style={this.rootStyleBase().homeUserViewBack}>
          <View >
            <Image style={[this.rootStyleBase().homeUserViewBackImage]} source={this.rootStyleImage('home_user_bg')}>
              <Image style={[this.rootStyleBase().homeUserViewBackPeople]} source={this.rootStyleImage('people_info_img')}></Image>
              <Text  style={this.rootStyleBase().homeUserViewBackText} >{this.rootLangBase('home_user_welcome')}{this.state.loginName}</Text>
            </Image>
          </View>
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

        this.rootNavPage(news.link,news.target);
    }

    renderNews(news) {

      //{this.onPressFeed.bind(this)}
            return (
                <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
                    <View style={news.top==10?this.rootStyleBase().cListIconSplit:{}}>
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
