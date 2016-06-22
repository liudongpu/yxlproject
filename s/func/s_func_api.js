
import SFuncTop from '../../s/func/s_func_top';


const apiZooConfig={
    "key": "tesetkey",
    "token": "78af9e8469df4727bfec2e0d20793b34223e6a919642470189ec942aaebe32adfe38deb2"
  }


export default class SFuncApi
{
    static post(sApiName,oParam,fCallBack)
    {
      //return sUrl;
      oParam.zoo=apiZooConfig;
      console.warn(SFuncTop.topConfigBase().upApiConfig().apiUrl+sApiName);
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
