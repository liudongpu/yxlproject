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

const Item = Picker.Item;

import SFuncForm from '../func/s_func_form';
import SFuncCamera from '../../s/func/s_func_camera';



export  class SCFormText extends Component{
  render() {


    var {pField,pStyle} = this.props;

    return (

        <TextInput onChangeText={(text) => SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,text)}  style={pStyle.input} placeholder={pField.fieldRemark}></TextInput>


    );
  }
}



export  class SCFormDate extends Component{
  render() {

    var {pField,pStyle} = this.props;

    return (
        <TextInput onChangeText={(text) => SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,text)} style={pStyle.input} placeholder={pField.fieldRemark}></TextInput>

    );
  }
}



export  class SCFormButton extends Component{
  render() {

    var {pOpereate,pStyle,pPress} = this.props;

    return (
        <TouchableOpacity style={pStyle.box} onPress={pPress}><Text style={pStyle.text}>{pOpereate.operateName}</Text></TouchableOpacity>

    );
  }
}



export  class SCFormSelect extends Component{

  render() {
    var {pField,pStyle} = this.props;
    return (
      <TouchableOpacity style={pStyle.box} >
        <View style={pStyle.show} ><Text>please select</Text></View>
        <View style={pStyle.arrow}></View>
      </TouchableOpacity>
    );
  }
}



export  class SCFormUpload extends Component{

  constructor(props)
  {
    super(props);
    this.state={url:''};
  }

  imageLink(sUrl)
  {
    var {pField} = this.props;
    this.setState({url:sUrl})
    SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,sUrl);
  }
  render() {
    var {pField,pStyle} = this.props;
    var sUrl=this.state.fileUrl;


    var cCom=null;

    return (
      <View style={pStyle.box} >
        <View style={pStyle.left} >
          <TouchableOpacity style={pStyle.touch} onPress={()=>{SFuncCamera.cammerOpen(this.imageLink.bind(this))}}><Text style={pStyle.text}>xuanze</Text></TouchableOpacity>
        </View>
        <View style={pStyle.right}>

            <Image source={{uri:this.state.url}} style={{width:100,height:100}}/>

        </View>
      </View>
    );
  }
}
