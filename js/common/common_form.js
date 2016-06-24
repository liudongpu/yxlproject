'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,

    Modal,
    Navigator,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import CommonRoot from '../common/common_root';
import SFuncStorage from '../../s/func/s_func_storage';


import {SCFormText,SCFormDate,SCFormButton,SCFormSelect} from '../../s/component/s_component_form';


export default class CommonForm  extends CommonRoot {

  constructor(props) {
      super(props);

       this.state = {
         pageModel: {},
         modalShow:false,
       };

       var sKey=this.rootNavParams(this.rootConfigBase().upDefineConfig().nparamsPage);


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

          {this.formRender(this.state.pageModel)}


        </View>

      )
  }

  //显示form正在加载
  formLoading()
  {
    this.setState({modalShow:true,modalText:this.rootLangBase('load_process')});

  }


  formRender(oPageModel) {
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
            <SCFormButton key={'operate'+iOperate}  pPress={()=>{this.formLoading()}} pOpereate={oOperate} pStyle={{box:this.rootStyleBase().cFormPageButton,text:this.rootStyleBase().cFormPageOperate}}  />
          );
        }
        aViews.push(<View key={'page'+iPage} style={this.rootStyleBase().cFormPageBox}>{aFields}</View>);

      }


      return (
        <View>
        {aViews}
          <Modal visible={this.state.modalShow} transparent={true}>
            <View style={this.rootStyleBase().cModalLoadBack} >

              <View style={this.rootStyleBase().cModalLoadBox}>
              <ActivityIndicator
                animating={true}
                color={this.rootConfigBase().upDefineConfig().modalLoadColor}
                style={this.rootStyleBase().cModalLoadIndicator}
                onRequestClose={() => {this.setState({modalShow:false})}}
                size="large"
              />
                <Text style={this.rootStyleBase().cModalLoadText}>{this.state.modalText}</Text>

              </View>
            </View>
          </Modal>
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
        return (<SCFormDate pField={oField} pStyle={{input:this.rootStyleBase().cFormTextInput}}></SCFormDate>);
      }
      else if(oField["fieldElement"]=="select")
      {
        return (<SCFormSelect pField={oField} pStyle={{box:this.rootStyleBase().cFormArrowBox,show:this.rootStyleBase().cFormArrowShow,   arrow:[this.rootStyleBase().cFormArrowRight,this.rootStyleBase().wArrowTip]}}></SCFormSelect>);
      }
      else {
        return (<SCFormText pField={oField} pStyle={{input:this.rootStyleBase().cFormTextInput}}></SCFormText>);
      }
  }



}
