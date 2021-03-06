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
    InteractionManager,
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
             inputContentText:''
           };

           this.listHeight = 0;
           this.footerY = 0;

           this.userMsgNowCode='';
           //SFuncEvent.addEvent('home_index_refresh_data',()=>{this.fetchInit()});


      }
      componentDidMount () {

        //this.rootNavMount('MainMain',()=>{this.fetchInit()});
        this.fetchInit();

        this.userMsgTimer=setInterval(()=>{this.fetchInit()},2000);


      }

      componentWillUnmount(){
        clearInterval(this.userMsgTimer);
        this.userMsgTimer=null;
      }

      fetchInit()
      {


        this.fetchData('');

      }




      fetchSuccess(oData)
      {
        var sLastCode=oData.infos[oData.infos.length-1].msgCode;
        if(sLastCode!=this.userMsgNowCode)
        {
          this.userMsgNowCode=sLastCode;
          this.setState({
              dataSource : this.state.dataSource.cloneWithRows(oData.infos)
          });
          //console.warn('a');

          //this.refs._listView.scrollTo({y:-99999999});

        }
      }



      fetchData (sText) {


          this.rootFuncApi().post("api/genapp/post/usermsg",{
            keyWord:sText,
            fromCode:this.state.memberCode
          },(data)=>{this.fetchSuccess(data)});

      }


    render() {
      //this.props.nav.setState({title:'xx'});


      const Component = Platform.select({
        ios: () => KeyboardAwareScrollView,
        android: () => View,
      })();

      return (


          <View  style={[this.rootStyleBase().container,this.rootStyleBase().wFlex,this.rootStyleBase().homeUserViewBack]}>
            <Component  style={PStyleProject.userMsgListAll} ref="scroll"
              onKeyboardWillHide={()=>{this.onPressButton();this.refs.scroll.scrollToPosition(0, 0, true);}}
             >
              <View  style={PStyleProject.userMsgListBox}>


                    <ListView
                    ref='_listView'
                    onLayout={(e)=>{this.listHeight = e.nativeEvent.layout.height;}}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNews.bind(this)}
                    initialListSize={20}
                    renderFooter={this.myRenderFooter.bind(this)}

                    onContentSizeChange={(contentWidth, contentHeight) => {
                      //console.warn('onContentSizeChange');
                      //console.warn(contentHeight);
                      //this.refs._listView.scrollTo({y: contentHeight})
                      this.refs._listView.initialListSize=20;
                      }}
                     />


              </View>

              <View  style={PStyleProject.userMsgListPut}>
                <View style={PStyleProject.userMsgInputBox} >
                <TextInput
                ref='_textInput'
                onChangeText={(text) =>{this.setState({inputContentText:text})}}
                 style={PStyleProject.userMsgListInput} value={this.state.inputContentText}/>
                 </View>
                 <TouchableOpacity  style={PStyleProject.userMsgBtnBox} onPress={()=>this.onPressButton()}>
                  <View style={PStyleProject.userMsgBtnView}>
                    <Text style={PStyleProject.userMsgBtnText}>{this.rootLangBase('user_msg_send')}</Text>
                  </View>
                 </TouchableOpacity>
              </View>

               </Component>
          </View>



      )
    }

    onPressButton()
    {


      this.rootFuncApi().post("api/genapp/post/usermsg",{
        type:1,
        fromCode:this.state.memberCode,
        content:this.state.inputContentText,

      },(data)=>{this.fetchSuccess(data)});

      this.setState({inputContentText:''});
    }

    myRenderFooter(e){
      return <View onLayout={(e)=> {
        this.footerY= e.nativeEvent.layout.y;
        //console.warn('myRenderFooter');

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
