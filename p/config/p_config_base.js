
//定义环境变量   默认为dev   正式发布时需要改成product
const modelRun='dev';

const apiConfig=
{
  dev:{
    apiUrl:'http://dev-yxl.ntw.srnpr.com/'
  }
}


export default class PConfigBase
{


     static upApiConfig()
     {
       return apiConfig[modelRun];
     }

}
