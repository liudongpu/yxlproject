'use strict';
import React, { Component } from 'react';
import {


    TextInput,
    View,
    DatePickerIOS,
    TouchableOpacity,
    Text,

} from 'react-native';


export  class SCFormText extends Component{
  render() {
    var oField=this.props.pField;

    return (

        <TextInput style={this.props.pStyle} placeholder={oField.fieldRemark}></TextInput>


    );
  }
}



export  class SCFormDate extends Component{
  render() {
    var oField=this.props.pField;



    return (


        <TextInput style={this.props.pStyle} placeholder={oField.fieldRemark}></TextInput>

    );
  }
}



export  class SCFormButton extends Component{
  render() {
    var oOperate=this.props.pOpereate;
    return (
        <TouchableOpacity style={this.props.pStyle} ><Text style={this.props.pOpeStyle}>{oOperate.operateName}</Text></TouchableOpacity>

    );
  }
}
