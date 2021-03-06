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
import SFuncStorage from '../../s/func/s_func_storage';

import UmengPush from 'react-native-umeng-push';
import codePush from "react-native-code-push";



export default class LayoutMain extends Component {
  constructor(props) {
        super(props);

        //获取DeviceToken
        UmengPush.getDeviceToken(deviceToken => {
            //console.warn("deviceToken: ", deviceToken);
            SFuncStorage.inTempValue('pushinfo','token',deviceToken);
        });

        //接收到推送消息回调
        UmengPush.didReceiveMessage(message => {
            //console.warn("didReceiveMessage:", message);
        });

        //点击推送消息打开应用回调
        UmengPush.didOpenMessage(message => {
            //console.warn("didOpenMessage:", message);
        });

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

      codePush.sync();
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
                <TouchableOpacity
                  underlayColor='transparent'
                  onPress={() => {if (index > 0) {navigator.pop()}}}>
                <View  style={PStyleBase.navLeft}>

                    <View style={PStyleBase.navLeftButton}>

                    </View>

                </View>
                </TouchableOpacity>
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
                return <View  style={PStyleBase.navRight}><Text style={PStyleBase.navRightButton}>{''}</Text></View>;
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
