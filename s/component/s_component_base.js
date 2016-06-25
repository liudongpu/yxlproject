'use strict';
import React, { Component } from 'react';
import {


    TextInput,
    View,
    DatePickerIOS,
    TouchableOpacity,
    Picker,
    Image,
    Text,

} from 'react-native';

import SFuncTop from '../../s/func/s_func_top';



export  class SCBaseImage extends Component{

  constructor(props)
  {
    super(props);
  }

  render() {
    let {pUrl,pWidth} = this.props;
    if(pWidth)
    {
      pUrl=SFuncTop.upImageThumber(pUrl,pWidth);
    }

    if(pUrl)
    {
      return (<Image {... this.props} source={{uri:pUrl}} ></Image>);
  }
  else {
    return <View {... this.props} ></View>;
  }

  }
}
