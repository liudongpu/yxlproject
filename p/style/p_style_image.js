import React, { Component } from 'react';

export default class PStyleImage
{

    static  upImage(sName)
     {
       return rootList[sName];
     }

}

//定义路由页面列表的设置
const  rootList =
    {
      'main_tab_icon_home_default':require('../../images/tabs/home_normal.png'),
      'main_tab_icon_home_focus':require('../../images/tabs/home_focus.png'),
      'main_tab_icon_category_default':require('../../images/tabs/category_normal.png'),
      'main_tab_icon_category_focus':require('../../images/tabs/category_focus.png'),
      'main_tab_icon_see_default':require('../../images/tabs/faxian_normal.png'),
      'main_tab_icon_see_focus':require('../../images/tabs/faxian_focus.png'),
      'main_tab_icon_user_default':require('../../images/tabs/personal_normal.png'),
      'main_tab_icon_user_focus':require('../../images/tabs/personal_focus.png'),
      'home_user_bg':require('../../images/home/user_bg.png'),
      'home_home_ico':require('../../images/home/home_ico.png'),
      'people_info_bg':require('../../images/home/people_bg.png'),
      'people_info_img':require('../../images/home/people_img.png'),
   };