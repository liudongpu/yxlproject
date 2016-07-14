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
      'UserLogin':{
        name: 'UserLogin',title:'用户登录'
      },
      'UserInfo':{
        name: 'UserInfo',title:'基本信息',page:'pe/com_uhutu_yxlsite_z_page_PageMemberInfo'
      },
      'UserSet':{
        name: 'UserSet',title:'设置'
      },
      'UserPassword':{
        name: 'UserPassword',title:'修改密码'
      },
      'UserAgree':{
        name: 'UserAgree',title:'意见反馈',page:'pa/com_uhutu_yxlsite_z_page_PageUserAgree'
      },
      'UserAbout':{
        name: 'UserAbout',title:'关于',page:'/web/static/about'
      },
      'UserMsg':{
        name: 'UserMsg',title:'消息'
      },
      'PeopleQrcode':{
        name: 'PeopleQrcode',title:'扫描二维码'
      },
      'SeeAdvice':{
        name: 'SeeAdvice',title:'公告列表'
      },
      'SeeAdadd':{
        name: 'SeeAdadd',title:'发布公告',page:'pa/com_uhutu_yxlsite_z_page_PageGeracomiumNotice'
      },
      'PeopleInfo':{
        name: 'PeopleInfo',title:'用户信息'
      },
      'PeopleImage':{
        name: 'PeopleImage',title:'照片列表'
      },
      'PeopleAgree':{
        name: 'PeopleAgree',title:'查房历史'
      },
      'PeopleReport':{
        name: 'PeopleReport',title:'健康数据'
      },
      'PeopleReportA':{
        name: 'PeopleReportA',title:'血压'
      },
      'PeopleReportB':{
        name: 'PeopleReportB',title:'血氧'
      },
      'PeopleReportC':{
        name: 'PeopleReportC',title:'血糖'
      },
      'PeopleReportD':{
        name: 'PeopleReportD',title:'体温'
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
