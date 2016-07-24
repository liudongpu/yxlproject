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
        <View style={pStyle.show} ><Text>{SFuncTop.topLangBase().upLang('form_select')}</Text></View>
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
