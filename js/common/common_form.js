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
import SFuncTop from '../../s/func/s_func_top';

import SFuncForm from '../../s/func/s_func_form';
import SFuncCamera from '../../s/func/s_func_camera';



import {
  SCFormText,
  SCFormDate,
  SCFormButton,
  SCFormSelect,
  SCFormUpload,
} from '../../s/component/s_component_form';


export default class CommonForm  extends CommonRoot {





  constructor(props) {
      super(props);

       this.state = {
         pageModel: {},
         modalShow:false,
         modalText:'',
       };

       var sKey=this.rootNavParams(this.rootConfigBase().upDefineConfig().nparamsPage);


       var oValue=SFuncStorage.upTempValue('common_form',sKey);
       if(oValue)
       {
         //this.fetchSuccess(oValue);
         this.state.pageModel=oValue.pageModel;
         this.initFormData();
         //this.fetchSuccess(oValue);
       }
       else {
         this.fetchData(sKey);
       }


  }
  componentDidMount () {
          //this.fetchData('pa/com_uhutu_yxlsite_z_page_DataPressure');
  }

  //初始化form的数据
  initFormData()
  {
    //从参数传递中拿  如果拿不到初始化下
    var oValue=this.rootNavParams(this.rootConfigBase().upDefineConfig().nParamsForm);

    if(!oValue)
    {
      oValue={};
    }
    SFuncForm.initFormData(this.upPageUnique(),oValue);
  }


  upPageUnique()
  {
    return this.state.pageModel[0].struct.pageUnique;
  }



  fetchSuccess(oData)
  {

    this.setState({
        pageModel : oData.pageModel,
    });
    this.initFormData();
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
  closeLoading()
  {
      this.setState({modalShow:false});
  }

  formSubmit(oOperate)
  {
    this.formLoading();
    var oFormData=SFuncForm.upFormData(this.upPageUnique());
    this.rootFuncApi().postWithError("api/zooweb/post/weboperate",{
      pageUnique:this.upPageUnique(),
      operateCode:oOperate.operateCode,
      pageUrl:'',
      dataMap:oFormData
    },(data)=>{this.submitSuccess(data)},(oResponse)=>{this.closeLoading();SFuncTop.msgAlert(oResponse.error);});

  }
  submitSuccess()
  {
    //关闭loading
    this.closeLoading();
    this.rootNavBack();
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
            //判断如果元素不是隐藏元素  则输出展示内容  隐藏元素不输出展示
            if(oField.fieldElement!='hidden')
            {
              aFields.push(
                <View key={'field'+iField} style={this.rootStyleBase().cFormPageItem}>
                  <View style={this.rootStyleBase().cFormPageLeft}><Text style={this.rootStyleBase().cFormPageText}>{oField["fieldLabel"]}</Text></View>
                  <View style={this.rootStyleBase().cFormPageCenter}>{this._formComponent(oField)}</View>
                </View>
              );
            }
        }


        for(var iOperate in oPage.operates)
        {
          var oOperate=oPage.operates[iOperate];
          aFields.push(
            <SCFormButton key={'operate'+iOperate}  pPress={()=>{this.formSubmit(oOperate)}} pOpereate={oOperate} pStyle={{box:this.rootStyleBase().cFormPageButton,text:this.rootStyleBase().cFormPageOperate}}  />
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
        return (<SCFormDate pField={oField}   pStyle={{input:this.rootStyleBase().cFormTextInput}}></SCFormDate>);
      }
      else if(oField["fieldElement"]=="select")
      {
        return (<SCFormSelect pField={oField} pStyle={{box:this.rootStyleBase().cFormArrowBox,show:this.rootStyleBase().cFormArrowShow,   arrow:[this.rootStyleBase().cFormArrowRight,this.rootStyleBase().wArrowTip]}}></SCFormSelect>);
      }
      else if(oField["fieldElement"]=="upload")
      {
        return (<SCFormUpload pField={oField}  pStyle={{input:this.rootStyleBase().cFormTextInput}} ></SCFormUpload>);
      }
      else {
        return (<SCFormText pField={oField} pStyle={{input:this.rootStyleBase().cFormTextInput}} ></SCFormText>);
      }
  }



}
