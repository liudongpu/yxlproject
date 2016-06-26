'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    TouchableOpacity,
    ListView,

    RecyclerViewBackedScrollView,
    StyleSheet
} from 'react-native';
import CommonRoot from '../common/common_root';
import BarcodeScanner from 'react-native-barcode-scanner-universal';
import SFuncTop from '../../s/func/s_func_top';
import PeopleInfo from '../people/people_info';


import {
  SCBaseModal,

} from '../../s/component/s_component_base';

export default class PeopleQrcode extends CommonRoot {


  constructor(props)
  {
    super(props);
    this.state={qrcode:''};
  }


  onCode(code)
  {
    if(this.state.qrcode=='')
    {
      //console.warn(JSON.stringify(code));
      this.refs.modal.modalShow();
      this.setState({qrcode:code.data});
      this.rootFuncApi().post("api/genapp/post/querymember",{
        qrcode:code.data
      },(data)=>{this.fetchSuccess(data)});
    }
  }

  fetchSuccess(data)
  {
    if(data.pageData.length!=1)
    {
      this.refs.modal.modalHidden();
      SFuncTop.msgAlert(this.state.qrcode,this.rootLangBase('people_qrcode_not'),()=>{this.setState({qrcode:''});});
      //this.setState({qrcode:''});
    }
    else
    {
      var news=data.pageData[0];
      this.refs.modal.modalHidden();

      this.rootNavPage('PeopleInfo',PeopleInfo,{pCode:news.member_code,navName:news.member_name,navType:'replace'});
    }
  }


  render() {
    let scanArea = null;
    if (Platform.OS === 'ios') {
      scanArea = (
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle} />
        </View>
      )
    }

    return (
      <View style={[this.rootStyleBase().container]}>
      <SCBaseModal ref="modal"/>
      <BarcodeScanner
        ref="barcode"
        onBarCodeRead={(code)=>this.onCode(code)}
        style={styles.camera}>
        {scanArea}
      </BarcodeScanner>
      </View>
    )
  }


  }



  const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
  })
