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



import CommonRoot from '../common/common_root';


export default class HomeUser extends CommonRoot {



    constructor(props) {
      super(props);
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    var   data = [
                {img:this.rootStyleImage('icon_da'),title:this.rootRouteList('SeeQrcode').title,target:PageInfo,link:'PageInfo',top:10},
                {img:this.rootStyleImage('icon_db'),title:this.rootRouteList('SeeAdvice').title,target:PageInfo,link:'PageInfo',top:10},
                {img:this.rootStyleImage('icon_dc'),title:this.rootRouteList('SeeAdadd').title,target:PageInfo,link:'PageInfo'},

                ];

      this.state = {
        dataSource: ds.cloneWithRows(data)
      };
    }




    render() {


      return (
        <View style={this.rootStyleBase().homeUserViewBack}>

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
