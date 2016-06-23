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
import CommonRoot from '../common/common_root';
import SFuncStorage from '../../s/func/s_func_storage';


import {SCFormText,SCFormDate,SCFormButton} from '../../s/component/s_component_form';


export default class CommonForm  extends CommonRoot {

  constructor(props) {
      super(props);

       this.state = {
         pageModel: {}
       };

       var sKey=this.props.nparams[this.rootConfigBase().upDefineConfig().nparamsPage];


       var oValue=SFuncStorage.upTempValue('common_form',sKey);
       if(oValue)
       {
         //this.fetchSuccess(oValue);
         this.state.pageModel=oValue.pageModel;
       }
       else {
         this.fetchData(sKey);
       }


  }
  componentDidMount () {
          //this.fetchData('pa/com_uhutu_yxlsite_z_page_DataPressure');
  }
  fetchSuccess(oData)
  {

    this.setState({
        pageModel : oData.pageModel
    });
  }

  fetchData (sText) {

      this.rootFuncApi().post("api/zooweb/post/webpage",{
        pageUrl:'../'+sText
      },(data)=>{ SFuncStorage.inTempValue('common_form',sText,data);   this.fetchSuccess(data)});

  }


  render(){
      return (
        <View style={[this.rootStyleBase().container,this.rootStyleBase().cFormPageBack]}>

          {this.form_render(this.state.pageModel)}
        </View>

      )
  }


  form_render(oPageModel) {
    var aViews=[];
    if(oPageModel&&oPageModel.length>0)
    {


      for(var iPage in oPageModel)
      {
        var oPage=oPageModel[iPage];
        var aFields=[];
        for(var iField in oPage.fields)
        {
          var oField=oPage.fields[iField];

            aFields.push(
              <View key={'field'+iField} style={this.rootStyleBase().cFormPageItem}>
                <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{oField["fieldLabel"]}</Text></View>
                <View style={this.rootStyleBase().cFormPageCenter}>{this._formComponent(oField)}</View>
              </View>
            );
        }


        for(var iOperate in oPage.operates)
        {
          var oOperate=oPage.operates[iOperate];
          aFields.push(
            <SCFormButton key={'operate'+iOperate} pOpereate={oOperate} pStyle={this.rootStyleBase().cFormPageButton} pOpeStyle={this.rootStyleBase().cFormPageOperate} />
          );

        }

        aViews.push(<View key={'page'+iPage} style={this.rootStyleBase().cFormPageBox}>{aFields}</View>);

      }


      return (
        <View>
        {aViews}
        </View>
      );
    }
    else {
      return null;
    }
  }

  //form上的组件系列
  _formComponent(oField)
  {
      if(oField["fieldElement"]=="date")
      {
        return (<SCFormDate pField={oField} pStyle={this.rootStyleBase().cFormTextInput}></SCFormDate>);
      }
      else {
        return (<SCFormText pField={oField} pStyle={this.rootStyleBase().cFormTextInput}></SCFormText>);
      }
  }



}
