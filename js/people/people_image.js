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
import CommonRoot from '../common/common_root';

import CommonForm from '../common/common_form';

import PStyleProject from '../../p/style/p_style_project';
import SFuncEvent from '../../s/func/s_func_event';
import SFuncTop from '../../s/func/s_func_top';

import {
  SCBaseImage,

} from '../../s/component/s_component_base';


const eventPeopleImageChange='eventPeopleImageChange';

export default class PeopleImage extends CommonRoot {

  constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            memberCode:this.rootNavParams('pCode'),
            dataSource: ds,

        };
  }
  componentDidMount () {


          this.rootNavMount('PeopleImage',()=>{this.fetchData('')});

          SFuncEvent.addEvent(eventPeopleImageChange,(event)=>{this.fetchData('')});


  }
  componentWillUnmount(){

    SFuncEvent.removeEvent(eventPeopleImageChange);
  }
  fetchSuccess(oData)
  {
    this.setState({
        dataSource : this.state.dataSource.cloneWithRows(oData.pageData)
    });
  }

  fetchData (sText) {

      this.rootFuncApi().post("api/genapp/post/memberpic",{
        code:this.state.memberCode
      },(data)=>{this.fetchSuccess(data)});

  }

  pressUpload()
  {
    var oParam={};
    oParam[this.rootConfigBase().upDefineConfig().nParamsForm]={member_code:this.state.memberCode};
    oParam[this.rootConfigBase().upDefineConfig().nParamsEvent]=eventPeopleImageChange;


    this.rootNavPage("MemberImageUploadAdd",CommonForm,oParam);
  }

  render() {

    return (
        <View style={[this.rootStyleBase().container,this.rootStyleBase().wFlex,this.rootStyleBase().cFormPageBack]}>
          <View  style={this.rootStyleBase().wFlex}>
            <View  style={PStyleProject.peopleImageList}>
                <TouchableOpacity style={this.rootStyleBase().cFormPageButton} onPress={()=>this.pressUpload()}>
                  <Text style={this.rootStyleBase().cFormPageOperate}>{this.rootLangBase('people_image_upload')}</Text>
                </TouchableOpacity>
                <View style={[this.rootStyleBase().wFlex,PStyleProject.peopleImageMtop]}>
                <ListView
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                dataSource={this.state.dataSource}
                renderRow={this.renderNews.bind(this)}
                 />
                </View>

            </View>
          </View>
        </View>
    )
  }

  renderNews(news) {

    var sRemark=news.pic_remark?news.pic_remark:this.rootLangBase('people_image_not');
    return (
        <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
            <View >
                <View style={[PStyleProject.peopleImageItem]}>

                    <View  style={[PStyleProject.peopleImageLeft]}>
                      <SCBaseImage style={PStyleProject.peopleImagePic} pUrl={news.pic_url} pWidth='200'  ></SCBaseImage>
                    </View>
                    <View style={PStyleProject.peopleImageCenter}>
                        <Text style={PStyleProject.peopleImageDesc}>{sRemark}</Text>
                        <Text style={PStyleProject.peopleImageTime}>{news.create_time}</Text>
                    </View>
                    <View style={PStyleProject.peopleImageRight}>
                      <View style={[this.rootStyleBase().cListViewIcon,this.rootStyleBase().wArrowTip]}></View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }



}
