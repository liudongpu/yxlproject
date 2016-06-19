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
import UserInfo from '../user/user_info';
import UserSet from '../user/user_set';
import UserPassword from '../user/user_password';
import UserAgree from '../user/user_agree';
import UserAbout from '../user/user_about';



import CommonRoot from '../common/common_root';


export default class HomeUser extends CommonRoot {



    constructor(props) {
      super(props);
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    var   data = [
                {img:this.rootStyleImage('main_tab_icon_home_default'),title:this.rootRouteList('UserInfo').title,target:UserInfo,link:'UserInfo',top:10},
                {img:this.rootStyleImage('main_tab_icon_home_default'),title:this.rootRouteList('UserSet').title,target:UserSet,link:'UserSet'},
                {img:this.rootStyleImage('main_tab_icon_home_default'),title:this.rootRouteList('UserPassword').title,target:UserPassword,link:'UserPassword',top:10},
                {img:this.rootStyleImage('main_tab_icon_home_default'),title:this.rootRouteList('UserAgree').title,target:UserAgree,link:'UserAgree'},
                {img:this.rootStyleImage('main_tab_icon_home_default'),title:this.rootRouteList('UserAbout').title,target:UserAbout,link:'UserAbout'}
                ];

      this.state = {
        dataSource: ds.cloneWithRows(data)
      };
    }

    componentDidMount () {
          //  this.fetchData();
        }
        fetchData () {
          /*
            fetch(NEWS_LIST_API_URL)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        dataSource : this.state.dataSource.cloneWithRows(responseData),
                        loaded : true,
                    });
                })
                .done();
          */
          /*
          this.setState({
              dataSource : this.state.dataSource.cloneWithRows([{img:this.rootStyleImage('main_tab_icon_home_default'),title:'基本信息',top:10},{img:this.rootStyleImage('main_tab_icon_home_default'),title:'基本信息'}]),
              loaded : true,
          });
          */
        }

  onPressFeed() {
    /*
   const { nav } = this.props;

       nav.push({name: 'PageTemplate',title:'xxx'});
    */
    this.rootNavPage('PageInfo',PageInfo);
   }

    render() {


      return (
        <View style={this.rootStyleBase().homeUserViewBack}>
          <View style={{overflow:'hidden'}}>
            <Image style={{height: 159,alignItems:'center',overflow:'hidden'}} source={this.rootStyleImage('home_user_bg')}>
              <Text onPress={this.onPressFeed.bind(this)} style={{textAlign: 'center',marginTop:110,padding:5,opacity:0.8,borderRadius:5}} >{this.rootLangBase('home_user_welcome')}11012345678</Text>
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
                    <View style={news.top==10?styles.pageContainer:{}}>
                        <View style={[styles.container, styles.newsItemContainer]}>
                            <Image
                            source={news.img}
                            style={styles.newsPic} />
                            <View style={styles.rightContainer}>
                                <Text style={styles.newsTitle}>{news.title}</Text>
                                <Text style={styles.newsSummary}>{'>'}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }





}




const styles = StyleSheet.create({
    pageContainer: {
      marginTop:10
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    rightContainer: {
        flex: 1,
        flexDirection : 'row',
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    listView: {
        backgroundColor: '#ffffff',
    },
    newsPic : {
        width : 30,
        height : 30,
        margin: 10,
        marginLeft: 0,
    },
    newsTitle : {

        fontSize : 16,
        flex:1,
        textAlign : 'left',
    },
    newsSummary : {
        color : '#cccccc',
        fontSize : 14,
        textAlign : 'left',
        width:30,
    },
})
