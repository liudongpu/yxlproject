import React, { Component } from 'react';

import {
  Navigator,
  Text,
  TouchableOpacity,
  BackAndroid,
  View
} from 'react-native';
import MainMain from '../main/main_main';
import PageTemplate from '../page/page_template';
import PStyleBase from '../../p/style/p_style_base';
import SComponentNavbar from '../../s/component/s_component_navbar';
import PLangBase from '../../p/lang/p_lang_base';
import SFuncTop from '../../s/func/s_func_top';





export default class LayoutMain extends Component {
  constructor(props) {
        super(props);


    }


    componentDidMount () {

      //android注册返回事件
      BackAndroid.addEventListener('hardwareBackPress', ()=> {

          var iLength=this.refs.navigator.getCurrentRoutes().length;


           if (iLength>1) {
             this.refs.navigator.pop();
             return true;
           }
           return false;
      });


    }

  _renderScene(router, navigator) {


    return <router.component nav={navigator}  nparams={router.nparams} />

  }




  render() {

            // 导航栏的Mapper
        var NavigationBarRouteMapper = {
          // 左键
          LeftButton(route, navigator, index, navState) {
            if (index > 0) {
              return (
                <View  style={PStyleBase.navLeft}>
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
              return <View  style={PStyleBase.navLeft}></View>;
            }
          },
          // 右键
          RightButton(route, navigator, index, navState) {
            if (route.onRightPress){
              return (
                <View style={PStyleBase.navRight}>
                  <TouchableOpacity
                    onPress={() => route.onRightPress()}>
                    <Text style={PStyleBase.navRightButton}>
                      {route.rightText || '右键'}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}else {
                return <View  style={PStyleBase.navRight}></View>;
              }
          },
          // 标题
          Title(route, navigator, index, navState) {
            //{route.name=="MainMain"?navigator.state.title:route.title}
            return (
              <View style={PStyleBase.navCenter}>
                <Text style={PStyleBase.navTitle}>
                  {route.name=="MainMain"&&navState.title?navState.title:route.title}
                </Text>
              </View>
            );
          }
        };


      return (
          <Navigator
          ref="navigator"
          style={{flex:1}}
          initialRoute={{name: 'MainMain',title:PLangBase.upLang('home_index'),component:MainMain}}
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
