import React, { Component } from 'react';

export default class PLangBase
{

    static  upLang(sName)
     {
       return rootList[sName];
     }

     static upCatch()
     {
       return rootCatch;
     }

}


const rootCatch=
{
  'default':'异常提示',
  'Network request failed':'网络请求异常',
  'Can\'t find variable':'无法找到变量'
}

//定义路由页面列表的设置
const  rootList =
    {


      'home_index':'首页',
      'home_category':'分类',
      'home_see':'发现',
      'home_user':'我的',
      'home_user_welcome':'欢迎您：',


   };
