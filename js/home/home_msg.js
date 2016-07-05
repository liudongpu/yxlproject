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

import SFuncStorage from '../../s/func/s_func_storage';

import PStyleBase from '../../p/style/p_style_base';
import CommonRoot from '../common/common_root';
import UserLogin from '../user/user_login';
import SFuncEvent from '../../s/func/s_func_event';
import SFuncApi from '../../s/func/s_func_api';
import PStyleProject from '../../p/style/p_style_project';



export default class HomeMsg extends CommonRoot {

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


        this.fetchData('');

      }




      fetchSuccess(oData)
      {
        this.setState({
            dataSource : this.state.dataSource.cloneWithRows(oData.infos)
        });
      }



      fetchData (sText) {


          this.rootFuncApi().post("api/genapp/post/usermsg",{
            keyWord:sText
          },(data)=>{this.fetchSuccess(data)});

      }


    render() {
      //this.props.nav.setState({title:'xx'});

      return (
          <View  style={this.rootStyleBase().homeUserViewBack}>

            <View  style={this.rootStyleBase().wFlex}>
                <View style={this.rootStyleBase().wHeightA}/>
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
    }

    renderNews(news) {

      //{this.onPressFeed.bind(this)}
      /*
      <Image
      source={this.rootStyleImage('home_home_ico')}
      style={this.rootStyleBase().cListViewImage}
       />
       */
        var sShowName=news.fromName;

            return (
                <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
                    <View style={PStyleProject.homeMsgListBack}>
                        <View style={PStyleProject.homeMsgListItem}>
                            <View style={PStyleProject.homeMsgListTop}>
                                <Text style={PStyleProject.homeMsgListName}>{news.fromName}</Text>
                                <Text style={PStyleProject.homeMsgListTip}>user</Text>
                                <Text style={PStyleProject.homeMsgListTime}>{news.msgTime}</Text>
                            </View>
                            <View>
                                <Text style={PStyleProject.homeMsgListInfo}>{news.msgContent}</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            );
        }


}
