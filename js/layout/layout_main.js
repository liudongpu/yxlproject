import React, { Component } from 'react';

import {
  Navigator,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import MainMain from '../main/main_main';
import PageTemplate from '../page/page_template';
import PStyleBase from '../../p/style/p_style_base';




export default class LayoutMain extends Component {
  constructor(props) {
        super(props);


    }

  _renderScene(router, navigator) {

    var Com = null;
        switch(router.name){
          case "MainMain":
            Com = MainMain;
            break;
          case "PageTemplate":
            Com = PageTemplate;
            break;
          default: //default view
            Com = MainMain;
        }

    return <Com nav={navigator}  />



  }




  render() {

            // 导航栏的Mapper
        var NavigationBarRouteMapper = {
          // 左键
          LeftButton(route, navigator, index, navState) {
            if (index > 0) {
              return (
                <View style={PStyleBase.navContainer}>
                  <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => {if (index > 0) {navigator.pop()}}}>
                    <Text style={PStyleBase.leftNavButtonText}>
                      后退
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            } else {
              return null;
            }
          },
          // 右键
          RightButton(route, navigator, index, navState) {
            if (route.onPress)
              return (
                <View style={PStyleBase.navContainer}>
                  <TouchableOpacity
                    onPress={() => route.onPress()}>
                    <Text style={PStyleBase.rightNavButtonText}>
                      {route.rightText || '右键'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
          },
          // 标题
          Title(route, navigator, index, navState) {
            return (
              <View style={PStyleBase.navContainer}>
                <Text style={PStyleBase.navTitle}>
                  应用标题
                </Text>
              </View>
            );
          }
        };


      return (
          <Navigator
          style={{flex:1}}
          initialRoute={{name: 'MainMain'}}
          renderScene={this._renderScene}
          navigationBar={
              <Navigator.NavigationBar
              style={PStyleBase.navContainer}
              routeMapper={NavigationBarRouteMapper}/>
          }
          >
          </Navigator>
      )
  }




}
