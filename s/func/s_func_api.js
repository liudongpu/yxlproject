
import SFuncTop from '../../s/func/s_func_top';


const apiZooConfig={
    "key": SFuncTop.topConfigBase().upApiConfig().apiKey,
    "token": ""
  }


const apiUrl={
  api:SFuncTop.topConfigBase().upApiConfig().apiUrl,
  upload:SFuncTop.topConfigBase().upApiConfig().uploadUrl,
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

      fetch(apiUrl.api+sApiName,{method:'POST',
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
      var aNames=sUrl.split('/');

      var sImgName=aNames[aNames.length-1];
      if(!sImgName||sImgName.indexOf('.')==-1)sImgName='img.jpg';

      formData.append('file', {uri:sUrl, name: sImgName, type: 'application/octex-stream'});
      let opt={};
      opt.body=formData;
      opt.method='post';

      fetch(apiUrl.upload,opt).then((response) => response.json())
      .then((responseData) => {
          if(responseData.resultCode==1)
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


    static inToken(sToken)
    {
      apiZooConfig.token=sToken;
    }



}
