'use strict';
import React, { Component } from 'react';

import PStyleBase from '../../p/style/p_style_base';
import PRouteList from '../../p/route/p_route_list';




export default class CommonRoot extends Component {

  //获取根样式
   rootStyleBase(){return PStyleBase;}

   //页面路由跳转
   rootNavPage(sName,eComponent)
   {
     const { nav } = this.props;
     //console.log(PRouteList.upRoute(sName));
     var eRoute=PRouteList.upRoute(sName);
     eRoute.component=eComponent;
     //nav.push(PRouteList.upRoute(sName));
     nav.push(eRoute);
   }

}
