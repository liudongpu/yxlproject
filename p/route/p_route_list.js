import React, { Component } from 'react';

export default class PRouteList
{

    static  upRoute(sName)
     {
       return rootList[sName];
     }

}

//定义路由页面列表的设置
const  rootList =
    {
      'PageTemplate':{
        name: 'PageTemplate',title:'测试1页'
      },
      'PageInfo':{
        name: 'PageInfo',title:'测试页2'
      },
      'PageNew':{
        name: 'PageNew',title:'测试页3'
      }
   };
