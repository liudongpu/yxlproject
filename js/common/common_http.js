'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    WebView,
    StyleSheet
} from 'react-native';
import CommonRoot from '../common/common_root';

export default class CommonHttp extends CommonRoot {

  constructor(props)
  {
    super(props);
    var sUrl=this.rootConfigBase().upApiConfig().apiUrl+ this.rootNavParams(this.rootConfigBase().upDefineConfig().nparamsPage);

    this.state={url:sUrl};

  }


  render() {


    return (
      <View style={this.rootStyleBase().container}>
        <WebView
          ref='webview'

          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}

        />
      </View>
    )
  }

}
