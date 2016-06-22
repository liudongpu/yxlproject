import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomeIndex from '../home/home_index';
import HomeUser from '../home/home_user';
import HomeSee from '../home/home_see';


import SFuncTop from '../../s/func/s_func_top';
import PStyleBase from '../../p/style/p_style_base';

import CommonRoot from '../common/common_root';
import CommonForm from '../common/common_form';








export default class MainMain extends CommonRoot {
  constructor(props) {
          super(props);
          //设置默认页
          this.state = {selectedTab: this.rootLangBase('home_index')}
      }



  _renderTabItem(img, selectedImg, tag, childView) {
      //this.props.nav.state.title=tag;
      //this.props.nav.getCurrentRoutes(0,1)[0].title='aa';
      return (
          <TabNavigator.Item
              selected={this.state.selectedTab === tag}
              renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
              renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}

              onPress={() => {this.props.nav.setState({title:tag});this.setState({ selectedTab: tag });  }}>
              {childView}
          </TabNavigator.Item>
      );
  }
  static _createChildView(tag) {


        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }


    render() {
        return (
            <View style={PStyleBase.container}>

                <TabNavigator hidesTabTouch={true} tabBarStyle={this.rootStyleBase().mainMainTable}>
                    {this._renderTabItem(this.rootStyleImage('main_tab_icon_home_default'), this.rootStyleImage('main_tab_icon_home_focus'), this.rootLangBase('home_index'), <HomeIndex nav={this.props.nav}/>)}
                    {this._renderTabItem(this.rootStyleImage('main_tab_icon_category_default'), this.rootStyleImage('main_tab_icon_category_focus'), this.rootLangBase('home_category'), MainMain._createChildView( this.rootLangBase('home_category')))}
                    {this._renderTabItem(this.rootStyleImage('main_tab_icon_see_default'), this.rootStyleImage('main_tab_icon_see_focus'), this.rootLangBase('home_see'),  <HomeSee nav={this.props.nav}/> )}

                    {this._renderTabItem(this.rootStyleImage('main_tab_icon_user_default'), this.rootStyleImage('main_tab_icon_user_focus'), this.rootLangBase('home_user'),<HomeUser nav={this.props.nav}/>)}
                </TabNavigator>
            </View >
        );
    }
}




const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});
