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

      }

      fetchData () {

          this.rootFuncApi().post("api/zooweb/post/managerlogin",{},this.fetchSuccess);
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
    this.rootNavPage('PageTemplate',PageTemplate);
   }

    render() {
      //this.props.nav.setState({title:'xx'});

      return (
          <View>
            <Text style={PStyleBase.welcome} onPress={this.onPressFeed.bind(this)}>
              mainmain
            </Text>
          </View>
      )
    }
}
