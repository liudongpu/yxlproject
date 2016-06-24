
//定义环境变量   默认为dev   正式发布时需要改成product
const modelRun='dev';

//
const apiConfig=
{
  dev:{
    apiUrl:'https://dev-yxl.ntw.srnpr.com/',
    uploadUrl:'http://ali-cfile.ichsy.com/cfiles/upload/zoofile',
    apiKey:'tesetkey'
  }
}


const defineConfig=
{
  nparamsPage:'config_base_page_link',
  nParamsForm:'config_base_form_data',
  modalLoadColor:'#ff0000'
}


export default class PConfigBase
{


     static upApiConfig()
     {
       return apiConfig[modelRun];
     }


     static upDefineConfig()
     {
       return defineConfig;
     }

}
