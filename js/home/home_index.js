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


import PStyleBase from '../../p/style/p_style_base';
import CommonRoot from '../common/common_root';


export default class HomeIndex extends CommonRoot {

  constructor(props) {
          super(props);
           var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.state = {
             dataSource: ds
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

          this.rootFuncApi().post("api/genapp/post/querymember",{
            keyWord:sText
          },(data)=>{this.fetchSuccess(data)});

      }




  onPressFeed() {
    /*
   const { nav } = this.props;

       nav.push({name: 'PageTemplate',title:'xxx'});
    */
    this.rootNavPage('PageTemplate',PageTemplate);
   }

    render() {
      //this.props.nav.setState({title:'xx'});

      return (
          <View  style={this.rootStyleBase().wFlex}>
            <View style={{backgroundColor:'#fbfbfb'}}>
            <TextInput
              style={this.rootStyleBase().homeIndexTextInput}
              onChangeText={(text) => {  this.fetchData(text)}}
              placeholder='  search'
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
      this.rootNavPage('PeopleInfo',PeopleInfo,{pCode:news.member_code});
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
                                <Text style={this.rootStyleBase().cListViewDesc}>{iIndex}-description</Text>
                            </View>
                            <View style={this.rootStyleBase().cListViewRight}>
                              <Text style={this.rootStyleBase().cListViewIcon}>{'>'}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }


}
