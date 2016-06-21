'use strict';
import React, { Component } from 'react';

import PStyleBase from '../../p/style/p_style_base';
import PRouteList from '../../p/route/p_route_list';
import PLangBase from '../../p/lang/p_lang_base';
import PStyleImage from '../../p/style/p_style_image';
import SFuncApi from '../../s/func/s_func_api';




export default class CommonRoot extends Component {


  //获取根样式
   rootStyleBase(){return PStyleBase;}

   rootStyleImage(sName){return PStyleImage.upImage(sName);}

   //获取根语言文字
    rootLangBase(sName){return PLangBase.upLang(sName);}

    rootFuncApi(){return SFuncApi;}


    //获取根语言文字
     rootRouteList(sName){return PRouteList.upRoute(sName);}
   //页面路由跳转
   rootNavPage(sName,eComponent,oProp)
   {
     const { nav } = this.props;
     //console.log(PRouteList.upRoute(sName));
     var eRoute=PRouteList.upRoute(sName);
     eRoute.component=eComponent;
     if(oProp)
     {
       eRoute.nparams=oProp;
       //如果属性上有navName属性 则将页面标题设置为navName
       if(oProp.navName)
       {
         eRoute.title=oProp.navName;
       }

     }

     //nav.push(PRouteList.upRoute(sName));
     nav.push(eRoute);
   }

   rootNavParams(sName)
   {
     return this.props.nparams[sName];
   }

}
