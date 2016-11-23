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
    ListView,
    RecyclerViewBackedScrollView,
    StyleSheet
} from 'react-native';

import PageTemplate from '../page/page_template';
import PeopleInfo from '../people/people_info';
import PeopleWebrtc from '../people/people_webrtc';

import SFuncStorage from '../../s/func/s_func_storage';
import PStyleBase from '../../p/style/p_style_base';

import PCallSystem from '../../p/call/p_call_system';
import CommonRoot from '../common/common_root';
import UserLogin from '../user/user_login';
import SFuncEvent from '../../s/func/s_func_event';
import SFuncApi from '../../s/func/s_func_api';



export default class HomeIndex extends CommonRoot {

      constructor(props) {
          super(props);
           var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.state = {
             dataSource: ds
           };

           //SFuncEvent.addEvent('home_index_refresh_data',()=>{this.fetchInit()});


      }
      componentDidMount () {

        //this.rootNavMount('MainMain',()=>{this.fetchInit()});
        this.fetchInit();


      }

      fetchInit()
      {

        SFuncStorage.upItemCallBack(
          'user','userLogin',(oUser)=>{
            if(oUser!=null)
            {
              SFuncApi.inToken(oUser.token);
              SFuncStorage.inTempValue('user','loginName',oUser.loginName);
              SFuncEvent.fireEvent('home_user_refresh_data');
              this.fetchData('');

              PCallSystem.refreshPushInfo();
            }
            else
            {
              //如果没有登录  则注册加载完成时执行刷新逻辑
              this.rootNavMount('MainMain',()=>{this.fetchInit()});
              this.fetchError();
            }
          }

        );
      }




      fetchSuccess(oData)
      {
        this.setState({
            dataSource : this.state.dataSource.cloneWithRows(oData.pageData)
        });
      }

      fetchError(oData)
      {

        this.rootNavPage('UserLogin',UserLogin);

      }

      fetchData (sText) {


          this.rootFuncApi().postWithError("api/genapp/post/querymember",{
            keyWord:sText
          },(data)=>{this.fetchSuccess(data)},(error)=>{this.fetchError(error)});

      }


    render() {
      //this.props.nav.setState({title:'xx'});

      return (
          <View  style={this.rootStyleBase().wFlex}>
            <View style={{backgroundColor:'#fbfbfb'}}>
            <TextInput
              style={this.rootStyleBase().homeIndexTextInput}
              onChangeText={(text) => {  this.fetchData(text)}}
              placeholder='  搜索'
              autoCapitalize='none'
              autoCorrect={false}
              value={this.state.text}
            />
            </View>
            <View  style={this.rootStyleBase().wFlex}>
                <ListView

                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                dataSource={this.state.dataSource}
                renderRow={this.renderNews.bind(this)}
                 />


            </View>
          </View>


      )
    }

    onPressNews(news)
    {
      this.rootNavPage('PeopleInfo',PeopleInfo,{pCode:news.member_code,navName:news.member_name});
      //this.rootNavPage('PeopleWebrtc',PeopleWebrtc,{pCode:news.member_code,navName:news.member_name});
    }

    renderNews(news) {

      //{this.onPressFeed.bind(this)}
      /*
      <Image
      source={this.rootStyleImage('home_home_ico')}
      style={this.rootStyleBase().cListViewImage}
       />
       */
        var sShowName=news.member_name;
        if(sShowName.length>2)
        {
          sShowName=sShowName.substring(sShowName.length-2,sShowName.length);
        }
        var aBgColors=['#CC3399','#FF9900','#666633','#99CC33','#CC6600','#336633','#FF6666'];


        //var iIndex=Math.floor(Math.random()*aBgColors.length);
        var iIndex=Math.floor(parseInt(news.member_code.substring(5),16)%aBgColors.length);

        var sBgColor=aBgColors[iIndex];

            return (
                <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
                    <View >
                        <View style={this.rootStyleBase().cListViewBox}>

                            <View  style={[this.rootStyleBase().cListViewLeft,{backgroundColor:sBgColor}]}>
                              <Text  style={this.rootStyleBase().cListViewName}>{sShowName}</Text>
                            </View>
                            <View style={this.rootStyleBase().cListViewCenter}>
                                <Text style={this.rootStyleBase().cListViewText}>{news.member_name}</Text>
                                <Text style={this.rootStyleBase().cListViewDesc}>{this.rootLangBase('home_index_room')}{news.room_name}{this.rootLangBase('home_index_age')}{news.member_age}</Text>
                            </View>
                            <View style={this.rootStyleBase().cListViewRight}>
                              <View style={[this.rootStyleBase().cListViewIcon,this.rootStyleBase().wArrowTip]}></View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }


}
