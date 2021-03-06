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
import SFuncEvent from '../../s/func/s_func_event';
import CommonSelect from '../common/common_select';


import {
  SCFormText,
  SCFormDate,
  SCFormButton,
  SCFormSelect,
  SCFormUpload,
  SCFormTextInput,
  SCFormBookText,
  SCFormTextArea,
} from '../../s/component/s_component_form';


import {
  SCBaseModal,

} from '../../s/component/s_component_base';

var iCount=0;

export default class CommonForm  extends CommonRoot {

  constructor(props) {


      super(props);

       this.state = {
         pageModel: {},
         modalShow:false,
         pageType:'',
         modalText:'',
         fireEvent:'',

       };


       //定义操作成功后的事件通知
       var sFireEvent=this.rootNavParams(this.rootConfigBase().upDefineConfig().nParamsEvent);
       if(sFireEvent)
       {
         this.state.fireEvent=sFireEvent;
       }

       /*
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
       */
  }
  componentDidMount () {


    var sKey=this.rootNavParams(this.rootConfigBase().upDefineConfig().nparamsPage);
    this.fetchStruct(sKey);
  }

  //初始化form的数据
  initFormStruct(oData)
  {
    //从参数传递中拿  如果拿不到初始化下
    this.setState({
        pageModel : oData.pageModel,
    });


  }



  fetchSuccess(oData)
  {
    var oValue=this.rootNavParams(this.rootConfigBase().upDefineConfig().nParamsForm);
    if(!oValue)
    {
      oValue={};
    }



    var aPromise=[];

    for(var i in oData.pageModel)
    {
      var oModel=oData.pageModel[i];
      SFuncForm.initFormData(oModel.struct.pageUnique,oValue);
      if(oModel.struct.pageType!='pa')
      {
        var pFunc=()=>this.fetchData(oModel,oValue) ;

        aPromise.push(new Promise((resolve)=>{this.fetchData(oModel,oValue,resolve)}));
      }
      this.setState({pageType:oModel.struct.pageType});

    }

    //如果不需要读取数据  直接展示  否则读完数据后再展示
    if(aPromise.length==0)
    {
      this.initFormStruct(oData);
    }
    else {
      Promise.all(aPromise).then(()=>this.initFormStruct(oData));
    }



    //this.initFormData(oData);


  }
  fetchData(oModel,oValue,resolve)
  {

    this.rootFuncApi().post("api/zooweb/post/webdata",{
      pageUnique:oModel.struct.pageUnique,
      pageQuery:oValue
    },(data)=>{SFuncForm.initFormData(oModel.struct.pageUnique,data.dataMaps[0]); resolve('ok'); });
  }


  fetchStruct (sText) {

    var oValue=SFuncStorage.upTempValue('common_form',sText);
    if(oValue)
    {
      this.fetchSuccess(oValue);
    }
    else {
      this.rootFuncApi().post("api/zooweb/post/webpage",{
        pageUrl:'../'+sText
      },(data)=>{ SFuncStorage.inTempValue('common_form',sText,data); this.fetchSuccess(data)});
    }
  }

  render(){
      return (
        <View style={[this.rootStyleBase().container,this.rootStyleBase().cFormPageBack]}>
          {this.formRender(this.state.pageModel)}
        </View>

      )
  }

  //显示form正在加载
  formLoading(bFlagShow)
  {
    if(bFlagShow)
    {
      //this.setState({modalShow:true,modalText:this.rootLangBase('load_process')});
      this.refs.modal.modalShow();
    }
    else {
      //this.setState({modalShow:false});
      this.refs.modal.modalHidden();
    }

  }


  formSubmit(oOperate)
  {
    this.formLoading(true);
    var oFormData=SFuncForm.upFormData(oOperate.pageUnique);
    this.rootFuncApi().postWithError("api/zooweb/post/weboperate",{
      pageUnique:oOperate.pageUnique,
      operateCode:oOperate.operateCode,
      pageUrl:'',
      dataMap:oFormData
    },(data)=>{this.submitSuccess(data)},(oResponse)=>{this.formLoading(false);SFuncTop.msgAlert(oResponse.error);});

  }
  submitSuccess()
  {
    //关闭loading
    this.formLoading(false);

    //form提交完成后  如果有触发事件  则触发对应的事件操作
    SFuncEvent.fireEvent(this.state.fireEvent);

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
              if(oField.fieldRemark=='')
              {
                oField.fieldRemark= this.rootLangBase('form_place')+  oField["fieldLabel"];
              }

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
          <SCBaseModal ref="modal"/>

        </View>

      );
    }
    else {
      return null;
    }
  }


  pressSelect(oField)
  {
    //console.warn(JSON.stringify(oField));

    this.rootNavPage('CommonSelect',CommonSelect,{field:oField});

    //this.refs[oField.fieldId].setState({text:'aa'});
    SFuncEvent.addEvent('event_common_form_on_select_change',(oChange)=>this.selectChange(oChange));
  }

  selectChange(oChange)
  {
    this.refs[oChange.field.fieldId].setState({text:oChange.text});
  }

  //form上的组件系列
  _formComponent(oField)
  {

      if(this.state.pageType=='pb')
      {
        return (<SCFormBookText pField={oField} pStyle={this.rootStyleBase().cFormPageText}></SCFormBookText>);
      }


      if(oField["fieldElement"]=="date")
      {
        return (<SCFormDate pField={oField}   pStyle={{input:this.rootStyleBase().cFormTextInput}}></SCFormDate>);
      }
      else if(oField["fieldElement"]=="select")
      {
        return (<SCFormSelect ref={oField.fieldId} pField={oField} pPress={()=>{this.pressSelect(oField)}} pStyle={{box:this.rootStyleBase().cFormArrowBox,show:this.rootStyleBase().cFormArrowShow,   arrow:[this.rootStyleBase().cFormArrowRight,this.rootStyleBase().wArrowTip]}}></SCFormSelect>);
      }
      else if(oField["fieldElement"]=="upload")
      {
        var oStyle={
          box:this.rootStyleBase().cFormUploadBox,
          left:this.rootStyleBase().cFormUploadLeft,
          touch:this.rootStyleBase().cFormUploadTouch,
          text:this.rootStyleBase().cFormUploadText,
          right:this.rootStyleBase().cFormUploadRight,
          image:this.rootStyleBase().cFormUploadImage,
          choose:this.rootStyleBase().cFormUploadChoose,

        };
        return (<SCFormUpload pField={oField}  pStyle={oStyle} pLoading={this.formLoading.bind(this)} ></SCFormUpload>);
      }
      else if(oField["fieldElement"]=="textarea")
      {
        return (<SCFormTextArea pField={oField} pStyle={{input:this.rootStyleBase().cFormTextArea}} ></SCFormTextArea>);
      }
      else {
        return (<SCFormTextInput pField={oField} pStyle={{input:this.rootStyleBase().cFormTextInput}} ></SCFormTextInput>);
      }
  }



}
