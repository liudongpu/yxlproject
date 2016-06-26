'use strict';
import React, { Component } from 'react';

import PStyleBase from '../../p/style/p_style_base';
import PRouteList from '../../p/route/p_route_list';
import PLangBase from '../../p/lang/p_lang_base';
import PStyleImage from '../../p/style/p_style_image';
import SFuncApi from '../../s/func/s_func_api';
import PConfigBase from '../../p/config/p_config_base';
import SFuncEvent from '../../s/func/s_func_event';




export default class CommonRoot extends Component {


  //获取根样式
   rootStyleBase(){return PStyleBase;}

   rootStyleImage(sName){return PStyleImage.upImage(sName);}

   //获取根语言文字
    rootLangBase(sName){return PLangBase.upLang(sName);}

    rootFuncApi(){return SFuncApi;}

    rootConfigBase(){return PConfigBase;}
    //获取根语言文字
     rootRouteList(sName){return PRouteList.upRoute(sName);}
   //页面路由跳转
   rootNavPage(sName,eComponent,oProp)
   {
     const { nav } = this.props;
     //console.log(PRouteList.upRoute(sName));
     var eRoute=PRouteList.upRoute(sName);
     eRoute.component=eComponent;
     if(!oProp)
     {
       oProp={};
     }

     oProp[PConfigBase.upDefineConfig().nparamsName]=sName;

       //如果属性上有navName属性 则将页面标题设置为navName
      if(oProp.navName)
      {
        eRoute.title=oProp.navName;
      }
      var sNavType='';
      if(oProp.navType)
      {
        sNavType=oProp.navType;
      }


      //如果eRoute上定义有page参数  则设置页面的链接为page参数
     if(eRoute.page)
     {
       oProp[PConfigBase.upDefineConfig().nparamsPage]=eRoute.page;
     }


     eRoute.nparams=oProp;

     //nav.push(PRouteList.upRoute(sName));

     if(sNavType=='replace')
     {
       nav.replace(eRoute);
     }
     else {
       nav.push(eRoute);
     }

   }


   //页面加载完成时调用该逻辑
   rootNavMount(sRouterName,fCall)
   {
     //const { nav } = this.props;
     //nav.navigationContext.addListener('didfocus', fCall);
     if(sRouterName=="")
     {
       sRouterName=this.rootNavParams(PConfigBase.upDefineConfig().nparamsName);
     }

     SFuncEvent.navAddEvent(sRouterName,fCall);
   }





   rootNavBack()
   {
     const { nav } = this.props;
     nav.pop();
   }

   rootNavParams(sName)
   {
     return this.props.nparams[sName];
   }

}
