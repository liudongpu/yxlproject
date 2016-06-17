'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    StyleSheet
} from 'react-native';
import CommonHeader from '../common/common_header';
import PageTemplate from '../page/page_template';

import PConfigBase from '../../p/config/p_config_base';


export default class HomeIndex extends Component {

  _renderScene(router, navigator) {

        var sText="def";

        var Com = null;
            switch(router.name){
              case "welcome":
                Com = PageTemplate;
                sText="wel";
                break;
              case "feed":
                Com = PageTemplate;
                sText="fee";
                break;
              default: //default view
                Com = PageTemplate;
            }

            return <Com navigator={navigator} title={sText} />

  }


    render() {

        return (
            <Navigator initialRoute={{name: 'welcome'}}  renderScene={this._renderScene}>
            </Navigator>
        )
    }
}

const styles = StyleSheet.create({
    ccontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
});
