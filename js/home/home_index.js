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
              this.fetchData();
      }
      fetchSuccess(oData)
      {
        this.setState({
            dataSource : this.state.dataSource.cloneWithRows(oData.pageData)
        });
      }

      fetchData () {
          this.rootFuncApi().post("api/genapp/post/querymember",{
            keyWord:this.state.text
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
          <View  style={this.rootStyleBase().wFlag}>
            <View>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:5}}
              onChangeText={(text) => {this.setState({text});this.fetchData()}}
              placeholder='search'
              value={this.state.text}
            />
            </View>
            <View  style={this.rootStyleBase().wFlag}>
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
            return (
                <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
                    <View >
                        <View style={this.rootStyleBase().cListViewBox}>
                            <Image
                            source={this.rootStyleImage('home_home_ico')}
                            style={this.rootStyleBase().cListViewImage}
                             />
                            <View style={this.rootStyleBase().cListViewFix}>
                                <Text style={this.rootStyleBase().cListViewText}>{news.member_name}</Text>
                                <Text style={this.rootStyleBase().cListViewIcon}>{'>'}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }


}
