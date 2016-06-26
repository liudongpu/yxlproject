'use strict';
import React, { Component } from 'react';
import {


    TextInput,
    View,
    DatePickerIOS,
    TouchableOpacity,
    Picker,
    Modal,
    ActivityIndicator,
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




export  class SCBaseModal extends Component{

  constructor(props)
  {
    super(props);
    var bFlagShow=false;


    this.state={visible:bFlagShow,text:''};
  }

  modalShow(sText)
  {
    if(sText==undefined)
    {
      sText=SFuncTop.topLangBase().upLang('load_process');
    }
    this.setState({visible:true,text:sText});
  }

  modalHidden()
  {
    this.setState({visible:false});
  }

  render() {
      return <Modal visible={this.state.visible} transparent={true} >
        <View style={SFuncTop.topStyleBase().cModalLoadBack} >

          <View style={SFuncTop.topStyleBase().cModalLoadBox}>
          <ActivityIndicator
            animating={true}
            color={SFuncTop.topConfigBase().upDefineConfig().modalLoadColor}
            style={SFuncTop.topStyleBase().cModalLoadIndicator}
            onRequestClose={() => {}}
            size="large"
          />
            <Text style={SFuncTop.topStyleBase().cModalLoadText}>{this.state.text}</Text>

          </View>
        </View>
      </Modal>
  }
}
