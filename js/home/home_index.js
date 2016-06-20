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
    StyleSheet
} from 'react-native';

import PageTemplate from '../page/page_template';


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
            dataSource : this.state.dataSource.cloneWithRows(oData.pathInfos)
        });
      }

      fetchData () {
          this.rootFuncApi().post("api/zooweb/post/webpath",{},(data)=>{this.fetchSuccess(data)});

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
          <View>
            <Text style={PStyleBase.welcome} onPress={this.onPressFeed.bind(this)}>
              mainmain
            </Text>
            <View>
                <ListView

                dataSource={this.state.dataSource}
                renderRow={this.renderNews.bind(this)}
                 />


            </View>
          </View>


      )
    }


    renderNews(news) {

      //{this.onPressFeed.bind(this)}
            return (
                <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
                    <View >
                        <View >
                            <Image
                            source={this.rootStyleImage('home_home_ico')}
                             />
                            <View >
                                <Text >{news.nodeName}</Text>
                                <Text >{'>'}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }


}
