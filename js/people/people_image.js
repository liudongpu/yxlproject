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


import PStyleProject from '../../p/style/p_style_project';


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
          this.fetchData('');
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

  render() {

    return (
        <View style={[this.rootStyleBase().container,this.rootStyleBase().cFormPageBack]}>
          <View>
            <View  style={PStyleProject.peopleImageList}>
                <ListView
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                dataSource={this.state.dataSource}
                renderRow={this.renderNews.bind(this)}
                 />


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
                      <Image style={PStyleProject.peopleImagePic} source={{uri:news.pic_url}}></Image>
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
