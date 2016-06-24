'use strict';
import React, { Component } from 'react';
import {


    TextInput,
    View,
    DatePickerIOS,
    TouchableOpacity,
    Picker,
    Text,

} from 'react-native';

const Item = Picker.Item;


export  class SCFormText extends Component{
  render() {


    var {pField,pStyle} = this.props;

    return (

        <TextInput style={pStyle.input} placeholder={pField.fieldRemark}></TextInput>


    );
  }
}



export  class SCFormDate extends Component{
  render() {

    var {pField,pStyle} = this.props;

    return (
        <TextInput style={pStyle.input} placeholder={pField.fieldRemark}></TextInput>

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
