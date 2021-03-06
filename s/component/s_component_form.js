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
import SFuncTop from '../../s/func/s_func_top';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';


import {
  SCBaseImage,

} from '../../s/component/s_component_base';



export  class SCFormSourceText extends Component{

  constructor(props)
  {
    super(props);
    var {pField} = this.props;
    var sVal=SFuncForm.upFormValueDefaultEmpty(pField.pageUnique,pField.fieldData);
    this.state={val:sVal};
  }
  render() {
    var {pField,pStyle} = this.props;
    return (
        <TextInput autoCapitalize='none' autoCorrect={false}  onChangeText={(text) => {SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,text);this.setState({val:text})}}  style={pStyle.input} placeholder={pField.fieldRemark} value={this.state.val}></TextInput>
    );
  }
}


export  class SCFormTextInput extends Component{


  render() {

      return (  <SCFormSourceText  {...this.props}></SCFormSourceText>)

  }
}





export  class SCFormBookText extends Component{


  render() {

    var {pField,pStyle} = this.props;
    var sVal=SFuncForm.upFormValueDefaultEmpty(pField.pageUnique,pField.fieldData);
      return (  <Text style={pStyle}>{sVal}</Text>)

  }
}







export  class SCFormTextArea extends Component{


  constructor(props)
  {
    super(props);
    var {pField} = this.props;
    var sVal=SFuncForm.upFormValueDefaultEmpty(pField.pageUnique,pField.fieldData);
    this.state={val:sVal};
  }
  render() {
    var {pField,pStyle} = this.props;
    return (

        <AutoGrowingTextInput autoCapitalize='none' initialHeight={100} minHeight={100}  autoCorrect={false}  onChangeText={(text) => {SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,text);this.setState({val:text})}}  style={[pStyle.input]} placeholder={pField.fieldRemark} value={this.state.val}></AutoGrowingTextInput>

    );
  }
}



export  class SCFormDate extends Component{

  constructor(props)
  {
    super(props);
    var {pField} = this.props;

    var format='yyyy-MM-dd hh:mm:ss';

    var now=new Date();

    var args = {
               "M+": now.getMonth() + 1,
               "d+": now.getDate(),
               "h+": now.getHours(),
               "m+": now.getMinutes(),
               "s+": now.getSeconds(),
               "q+": Math.floor((now.getMonth() + 3) / 3),  //quarter
               "S": now.getMilliseconds()
           };
           if (/(y+)/.test(format))
               format = format.replace(RegExp.$1, (now.getFullYear() + "").substr(4 - RegExp.$1.length));
           for (var i in args) {
               var n = args[i];
               if (new RegExp("(" + i + ")").test(format))
                   format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
           }
    this.state={val:format};
    SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,format);
  }
  render() {

    var {pField,pStyle} = this.props;

    return (
        <TextInput onChangeText={(text) => {this.setState({val:text});SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,text)}} style={pStyle.input} placeholder={pField.fieldRemark} value={this.state.val}></TextInput>

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

  constructor(props)
  {
    super(props);
    this.state={text:SFuncTop.topLangBase().upLang('form_select')};
  }


  render() {
    var {pField,pStyle,pPress} = this.props;
    return (
      <TouchableOpacity style={pStyle.box} onPress={()=>pPress()}>
        <View style={pStyle.show} ><Text>{this.state.text}</Text></View>
        <View style={pStyle.arrow}></View>
      </TouchableOpacity>
    );
  }
}



export  class SCFormUpload extends Component{

  constructor(props)
  {
    super(props);
    var {pField} = this.props;
    var sVal=SFuncForm.upFormValueDefaultEmpty(pField.pageUnique,pField.fieldData);
    this.state={url:sVal};
  }

  imageLink(sUrl)
  {
    var {pField} = this.props;
    this.setState({url:sUrl});
    SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,sUrl);
  }
  render() {
    var {pField,pStyle,pLoading} = this.props;
    var sUrl=this.state.fileUrl;



    var cCom=null;

    return (
      <View style={pStyle.box} >
        <View style={pStyle.left} >
          <TouchableOpacity style={pStyle.touch} onPress={()=>{SFuncCamera.cammerOpen(this.imageLink.bind(this),pLoading)}}>
            <Image source={SFuncTop.topStyleImage().upImage('icon_camera')} style={pStyle.choose}/>
            <Text style={pStyle.text}>{SFuncTop.topLangBase().upLang('form_upload')}</Text>
          </TouchableOpacity>
        </View>
        <View style={pStyle.right}>

            <SCBaseImage pUrl={this.state.url} pWidth="100" style={pStyle.image}/>

        </View>
      </View>
    );
  }
}
