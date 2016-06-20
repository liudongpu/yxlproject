import React, { Component } from 'react';

export default class PLangBase
{

    static  upLang(sName)
     {
       return rootList[sName];
     }

}

//定义路由页面列表的设置
const  rootList =
    {

      'system_network_error':'网络异常，请检查网络是否通畅',
      'home_index':'首页',
      'home_category':'分类',
      'home_see':'发现',
      'home_user':'我的',
      'home_user_welcome':'欢迎您：',
   };
