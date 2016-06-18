import React, { Component } from 'react';


import PageTemplate from '../../js/page/page_template';



export default class PRouteList
{




    static  upRoute(sName)
     {
       //定义路由页面列表
       var _rootList =
         {
           'PageTemplate':{
             name: 'PageTemplate',title:'测试页',component:PageTemplate
           },
           'PageInfo':{
             name: 'PageInfo',title:'第二页',component:PageTemplate
           },
        };

       return _rootList[sName];
     }

}


const rootList=
{

}
