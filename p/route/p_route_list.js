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
      'PeopleQrcode':{
        name: 'PeopleQrcode',title:'扫描二维码'
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
      'PeopleImage':{
        name: 'PeopleImage',title:'照片列表'
      },
      'PeoplePressureAdd':{
        name: 'PeoplePressureAdd',title:'添加血压',page:'pa/com_uhutu_yxlsite_z_page_DataPressure'
      },
      'PeopleOxygenAdd':{
        name: 'PeoplePressureAdd',title:'添加血氧',page:'pa/com_uhutu_yxlsite_z_page_DataOxygen'
      },
      'PeopleGlucoseAdd':{
        name: 'PeopleGlucoseAdd',title:'添加血糖',page:'pa/com_uhutu_yxlsite_z_page_DataGlucose'
      },
      'PeopleTemperatureAdd':{
        name: 'PeopleTemperatureAdd',title:'添加体温',page:'pa/com_uhutu_yxlsite_z_page_DataTemperature'
      },
      'MemberImageUploadAdd':{
        name: 'MemberImageUploadAdd',title:'上传图片',page:'pa/com_uhutu_yxlsite_z_page_PageMemberPic'
      },
      'MemberImageUploadEdit':{
        name: 'MemberImageUploadEdit',title:'图片',page:'pe/com_uhutu_yxlsite_z_page_PageMemberPic'
      },


   };
