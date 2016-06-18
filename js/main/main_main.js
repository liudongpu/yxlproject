import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import CommonHeader from '../common/common_header';
import HomeIndex from '../home/home_index';

import SFuncTop from '../../s/func/s_func_top';
import PStyleBase from '../../p/style/p_style_base';





const HOME = 'home';
const HOME_NORMAL = require('../../images/tabs/home_normal.png');
const HOME_FOCUS = require('../../images/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../../images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('../../images/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../../images/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('../../images/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../../images/tabs/cart_normal.png');
const CART_FOCUS = require('../../images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../../images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('../../images/tabs/personal_focus.png');


export default class MainMain extends Component {
  constructor(props) {
          super(props);
          this.state = {selectedTab: HOME}
      }

  _renderTabItem(img, selectedImg, tag, childView) {
      return (
          <TabNavigator.Item
              selected={this.state.selectedTab === tag}
              renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
              renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
              onPress={() => this.setState({ selectedTab: tag })}>
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

                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomeIndex nav={this.props.nav}/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, MainMain._createChildView(CATEGORY))}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, MainMain._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, MainMain._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, MainMain._createChildView(PERSONAL))}
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
