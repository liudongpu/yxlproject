export default class PConfigBase
{
  //定义环境变量   默认为dev   正式发布时需要改成product
  static _modelRun='dev';
   static _apiConfig =
      {
        dev:{
          apiUrl:'http://www.baidu.com'
        }
     };


     static upApi()
     {
       return this._apiConfig[this._modelRun];
     }

}
