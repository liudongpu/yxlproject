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
    ScrollView,
    StyleSheet
} from 'react-native';


import CommonRoot from '../common/common_root';
import CommonForm from '../common/common_form';
import PeopleImage from './people_image';
import PeopleAgree from './people_agree';
import PeopleReport from './people_report';
import CommonHttp from '../common/common_url';
import PConfigBase from '../../p/config/p_config_base';
import SFuncTop from '../../s/func/s_func_top';

import PeopleWebrtc from './people_webrtc';


export default class PeopleInfo  extends CommonRoot {

  constructor(props) {
        super(props);
        this.state = {
            memberCode:this.rootNavParams('pCode'),

        };
  }

  peopleBase()
  {
    var oParam={};
    oParam[this.rootConfigBase().upDefineConfig().nParamsForm]={member_code:this.state.memberCode};
    this.rootNavPage("PeopleBase",CommonForm,oParam);
  }

  render(){
      return (
        <View   style={this.rootStyleBase().container}>
          <View style={this.rootStyleBase().peopleInfoTop}>
            <View style={[this.rootStyleBase().peopleInfoBg]}>
              <View style={this.rootStyleBase().peopleInfoRadius}>
                <TouchableOpacity onPress={()=>{this.peopleBase()}} >
                  <Image style={[this.rootStyleBase().peopleInfoImg,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage('people_info_img')}></Image>
                </TouchableOpacity>
              </View>

            </View>
          </View>
          <ScrollView>
            <View style={[this.rootStyleBase().peopleInfoTip]}>

                <Text style={this.rootStyleBase().peopleInfoTipText}>
                    {this.rootLangBase('people_info_add_text')}
                </Text>

            </View>

            <View style={[this.rootStyleBase().peopleInfoDetail,this.rootStyleBase().peopleInfoDetailBorder]}>
              {this._nodeDetail('detail_member','PeopleBase')}
              {this._nodeDetail('detail_photo','PeopleImage',PeopleImage,1)}
              {this._nodeDetail('detail_agree','PeopleAgree',PeopleAgree,1)}

            </View>
            <View style={this.rootStyleBase().peopleInfoDetail}>
              {this._nodeDetail('detail_report','PeopleReport',PeopleReport,1)}
              {this._nodeDetail('detail_census','PeopleCensus',CommonHttp,2)}
              {this._nodeDetail('detail_webrtc','PeopleWebrtc',PeopleWebrtc,1)}


            </View>
            <View style={[this.rootStyleBase().peopleInfoTip]}>

                <Text style={this.rootStyleBase().peopleInfoTipText}>
                    {this.rootLangBase('people_info_add_line')}
                </Text>

            </View>
            <View style={[this.rootStyleBase().peopleInfoDetail,this.rootStyleBase().peopleInfoDetailBorder]}>
              {this._nodeDetail('detail_pressure','PeoplePressureAdd')}
              {this._nodeDetail('detail_glucose','PeopleGlucoseAdd')}
              {this._nodeDetail('detail_temperature','PeopleTemperatureAdd')}

            </View>
            <View style={this.rootStyleBase().peopleInfoDetail}>
              {this._nodeDetail('detail_oxygen','PeopleOxygenAdd')}
              {this._nodeEmpty()}
              {this._nodeEmpty()}
            </View>
            <View style={[this.rootStyleBase().peopleInfoTip]}>


            </View>



          </ScrollView>

        </View>

      )
  }

  _nodeCard(sCard,sPage,cForm)
  {
    return(
      <View style={this.rootStyleBase().peopleInfoCardCell}>
        <TouchableOpacity style={this.rootStyleBase().wCenter} onPress={()=>{this.rootNavPage(sPage,cForm,{pCode:this.state.memberCode})}} >
          <Image style={[this.rootStyleBase().peopleInfoCardImage,{resizeMode:Image.resizeMode.cover}]} source={this.rootStyleImage(sCard)}></Image>
          <Text style={[this.rootStyleBase().peopleInfoCardText,this.rootStyleBase().peopleInfoCardBorder]}>{this.rootLangBase(sCard)}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _nodeDetail(sIcon,sPage,cForm,iLink)
  {
    var oParam={};
    oParam[this.rootConfigBase().upDefineConfig().nParamsForm]={member_code:this.state.memberCode};
    if(iLink==1)
    {
      oParam={pCode:this.state.memberCode};
    }
    else if(iLink==2)
    {
      oParam={};
      oParam[PConfigBase.upDefineConfig().nparamsPage]=SFuncTop.topConfigBase().upApiConfig().yhUrl+'/yhmanage/web/census/census_list?u_member_code='+this.state.memberCode;
    }
    else{
      cForm=CommonForm;
    }

    return (
      <View style={this.rootStyleBase().peopleInfoDetailBox}>
          <TouchableOpacity style={{flex:1}} onPress={()=>{this.rootNavPage(sPage,cForm,oParam)}}>
          <View style={this.rootStyleBase().peopleInfoDetailTop}>
            <Image style={[this.rootStyleBase().peopleInfoDetailImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage(sIcon)}></Image>
          </View>
          <View style={this.rootStyleBase().peopleInfoDetailBottom}>
            <Text style={this.rootStyleBase().peopleInfoDetailText}>{this.rootLangBase(sIcon)}</Text>
          </View>

          </TouchableOpacity>
      </View>
    )
  }


  _nodeEmpty()
  {
    return (

      <View style={this.rootStyleBase().peopleInfoDetailBox}>
        <View style={this.rootStyleBase().peopleInfoDetailTop}>
        </View>
        <View style={this.rootStyleBase().peopleInfoDetailBottom}>
        </View>
      </View>
    )
  }





  _nodeIcon(sIcon,sPage)
  {
    var oParam={};
    oParam[this.rootConfigBase().upDefineConfig().nParamsForm]={member_code:this.state.memberCode};

    return (
      <View style={this.rootStyleBase().peopleInfoItemBox}>
          <TouchableOpacity style={{flex:1}} onPress={()=>{this.rootNavPage(sPage,CommonForm,oParam)}}>
          <Image style={[this.rootStyleBase().peopleInfoItemImage,{resizeMode:Image.resizeMode.stretch}]} source={this.rootStyleImage(sIcon)}></Image>


          <Text style={this.rootStyleBase().peopleInfoItemText}>{this.rootLangBase(sIcon)}</Text>
          </TouchableOpacity>
      </View>
    )
  }

}
