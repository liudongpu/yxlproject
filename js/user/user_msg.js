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
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import dismissKeyboard from 'dismissKeyboard';

import SmartScrollView from 'react-native-smart-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default class UserMsg extends CommonRoot {

      constructor(props) {
          super(props);
           var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.state = {
             dataSource: ds,
             memberCode:this.rootNavParams('pCode'),
           };

           this.listHeight = 0;
           this.footerY = 0;

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
            keyWord:sText,
            fromCode:this.state.memberCode
          },(data)=>{this.fetchSuccess(data)});

      }


    render() {
      //this.props.nav.setState({title:'xx'});

      return (


          <View  style={[this.rootStyleBase().container,this.rootStyleBase().wFlex,this.rootStyleBase().homeUserViewBack]}>
            <KeyboardAwareScrollView  style={PStyleProject.userMsgListAll} enableAutoAutomaticScroll={false}>
              <View  style={PStyleProject.userMsgListBox}>


                    <ListView
                    ref='_listView'
                    onLayout={(e)=>{this.listHeight = e.nativeEvent.layout.height;}}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNews.bind(this)}

                    renderFooter={this.myRenderFooter.bind(this)}
                     />


              </View>

              <View  style={PStyleProject.userMsgListPut}>
                <TextInput
                ref='_textInput'
                onChangeText={(text) =>{this.state.inputContentText=text}}
                 style={PStyleProject.userMsgListInput}/>
              </View>

               </KeyboardAwareScrollView>
          </View>



      )
    }

    myRenderFooter(e){
      return <View onLayout={(e)=> {
        this.footerY= e.nativeEvent.layout.y;

        if (this.listHeight && this.footerY &&this.footerY>this.listHeight) {
          var scrollDistance = this.listHeight - this.footerY;
          this.refs._listView.scrollTo({y:-scrollDistance});
        }
      }}/>
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
        var sShowName=news.toName;

        var styleRightContent=PStyleProject.userMsgListContentA;
        var styleAlignRight={};
        var styleContent=PStyleProject.userMsgViewContentA;
        if(news.sendType==0)
        {
          styleRightContent=PStyleProject.userMsgListContentB;
          styleAlignRight=PStyleProject.userMsgAlignRight;
          styleContent=PStyleProject.userMsgViewContentB;
          sShowName=news.fromName;

        }


            return (

                    <View style={PStyleProject.userMsgInfoBox}>
                      <View style={PStyleProject.userMsgViewTime}>
                        <Text style={PStyleProject.userMsgListTime}>{news.msgTime}</Text>
                      </View>
                      <View>
                        <Text style={[PStyleProject.userMsgListName,styleAlignRight]}>{sShowName}</Text>
                      </View>
                      <View style={[PStyleProject.userMsgViewContent,styleContent]}>

                          <Text style={[PStyleProject.userMsgListContent,styleRightContent,styleAlignRight]}>{news.msgContent}</Text>

                      </View>


                    </View>

            );
        }


}
