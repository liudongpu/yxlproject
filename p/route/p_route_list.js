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
      },
      'UserInfo':{
        name: 'UserInfo',title:'基本信息'
      },
      'UserSet':{
        name: 'UserSet',title:'设置'
      },
      'UserPassword':{
        name: 'UserPassword',title:'修改密码'
      },
      'UserAgree':{
        name: 'UserAgree',title:'意见反馈'
      },
      'UserAbout':{
        name: 'UserAbout',title:'关于'
      },
      'SeeQrcode':{
        name: 'SeeQrcode',title:'扫描二维码'
      },
      'SeeAdvice':{
        name: 'SeeAdvice',title:'公告列表'
      },
      'SeeAdadd':{
        name: 'SeeAdadd',title:'发布公告'
      },
      'PeopleInfo':{
        name: 'PeopleInfo',title:'用户信息'
      },
   };
