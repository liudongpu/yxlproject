
import SFuncTop from '../../s/func/s_func_top';


const apiZooConfig={
    "key": "tesetkey",
    "token": "78af9e8469df4727bfec2e0d20793b34223e6a919642470189ec942aaebe32adfe38deb2"
  }


export default class SFuncApi
{

    static post(sApiName,oParam,fCallBack)
    {
      this.postWithError(sApiName,oParam,fCallBack,(oResponse)=>{SFuncTop.msgAlert(oResponse.error);});
    }
    static postWithError(sApiName,oParam,fCallBack,fErrorBack)
    {
      //return sUrl;
      oParam.zoo=apiZooConfig;

      fetch(SFuncTop.topConfigBase().upApiConfig().apiUrl+sApiName,{method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },body: JSON.stringify(oParam)})
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.status==1)
              {

                fCallBack(responseData);
              }
              else {
                console.warn(JSON.stringify(responseData));
                fErrorBack(responseData);
              }
          })
          .catch((error) => {
            console.warn(error);
            //SFuncTop.msgAlert(SFuncTop.topLangBase().upLang('system_network_error'));
            SFuncTop.msgCatch(error.message);
          })
          .done();


    }

    static uploadFile(sUrl,fCallBack)
    {
      let formData = new FormData();
      //formData.append('token', result.data);
      formData.append('file', {uri:sUrl, name: 'image.jpg', type: 'application/octex-stream'});
      let opt={};
      opt.body=formData;
      opt.method='post';

      fetch('http://ali-cfile.ichsy.com/cfiles/upload/zoofile',opt).then((response) => response.json())
      .then((responseData) => {
          if(responseData.status==1)
          {
            fCallBack(responseData);
          }
          else {
            console.warn(JSON.stringify(responseData));
            SFuncTop.msgAlert(responseData.error);
          }
      })
      .catch((error) => {
        console.warn(error);
        //SFuncTop.msgAlert(SFuncTop.topLangBase().upLang('system_network_error'));
        SFuncTop.msgCatch(error.message);
      })
      .done();
    }



}
