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
  'Can\'t find variable':'无法找到变量',
  'Internal Server Error':'服务器出现异常错误',
}

//定义路由页面列表的设置
const  rootList =
    {


      'home_index':'首页',
      'home_category':'分类',
      'home_see':'发现',
      'home_user':'我的',
      'home_user_welcome':'欢迎您：',
      'people_info_carda':'照片管理',
      'people_info_cardb':'查房历史',
      'people_info_cardc':'健康数据',
      'people_info_add_text':'  添加数据   ',
      'people_info_add_line':'——————',
      'people_info_icona':'血压',
      'people_info_iconb':'血氧',
      'people_info_iconc':'血糖',
      'people_info_icond':'体温',
      'people_image_not':'暂无描述信息',
      'people_image_upload':'上传图片',
      'load_process':'正在处理',
      'camera_select':'请选择',
      'camera_cancel':'取消',
      'camera_photo':'拍照',
      'camera_lib':'从相册选择',




   };
