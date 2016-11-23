
//定义环境变量   默认为dev   正式发布时需要改成product
const modelRun='product';

//
const apiConfig=
{
  dev:{
    apiUrl:'https://dev-yxl.ntw.srnpr.com/',
    uploadUrl:'http://art-upload.iqhsy.com/mfile/upload/art',
    yhUrl:'http://wx.jk.yxl9.cn',
    apiKey:'tesetkey'
  },
  product:{
    apiUrl:'https://app-gen-api.yinxl.com/',
    uploadUrl:'https://art-upload.iqhsy.com/mfile/upload/art',
    yhUrl:'https://app-wx-page.yinxl.com',
    apiKey:'tesetkey'
  }
}


const defineConfig=
{
  //参数  链接
  nparamsPage:'config_base_page_link',
  nparamsName:'config_base_router_name',
  //参数  form值传递
  nParamsForm:'config_base_form_data',
  //参数 触发事件
  nParamsEvent:'config_base_event_fire',

  modalLoadColor:'#ff0000'
}


export default class PConfigBase
{


     static upApiConfig()
     {
       return apiConfig[modelRun];
     }

     //判断是否正式版
     static upFlagProduct()
     {
       return modelRun!="dev";
     }


     static upDefineConfig()
     {
       return defineConfig;
     }

}
