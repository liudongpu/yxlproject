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
      'user_set_notice':'接收消息',
      'user_set_local':'本地消息',
      'user_set_message':'接收咨询',
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
      'people_qrcode_not':'不支持的内容',
      'user_login_title':'银杏养助登录',
      'user_login_name':'用户名',
      'user_login_pass':'密   码',
      'user_login_pa':'请输入11位有效手机号',
      'user_login_pb':'请输入密码',
      'user_login_button':'登录',
      'user_set_logout':'退出登录',
      'user_password_a':'原密码',
      'user_password_b':'新密码',
      'user_password_c':'重复密码',
      'user_password_ra':'请输入原密码',
      'user_password_rb':'请输入新密码',
      'user_password_rc':'请重复输入新密码',
      'user_password_btn':'确认修改',

      'user_set_confirm':'确认要退出登录吗？',


      'load_process':'正在处理',
      'camera_select':'请选择',
      'camera_cancel':'取消',
      'camera_photo':'拍照',
      'camera_lib':'从相册选择',
      'form_upload':'选择图片',
      'form_select':'请选择',
      'form_place':'请输入',

      'alert_ok':'确定',
      'alert_cancel':'取消',




   };
