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
import SComponentNavbar from '../../s/component/s_component_navbar';


export default class LayoutMain extends Component {
  constructor(props) {
        super(props);
    }

  _renderScene(router, navigator) {


    return <router.component nav={navigator}  />

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
                    <Text style={PStyleBase.navLeftButton}>
                      {'<后退'}
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
            //{route.name=="MainMain"?navigator.state.title:route.title}
            return (
              <View style={PStyleBase.navContainer}>
                <Text style={PStyleBase.navTitle}>
                  {route.name=="MainMain"&&navState.title?navState.title:route.title}
                </Text>
              </View>
            );
          }
        };


      return (
          <Navigator
          style={{flex:1}}
          initialRoute={{name: 'MainMain',title:'home',component:MainMain}}
          renderScene={this._renderScene}
          navigationBar={
              <SComponentNavbar
              style={PStyleBase.navContainer}
              routeMapper={NavigationBarRouteMapper}/>
          }
          >
          </Navigator>
      )
  }




}
