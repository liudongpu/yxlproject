
import SFuncTop from '../../s/func/s_func_top';


const apiZooConfig={
    "key": "tesetkey",
    "token": "4f99d155d34d4c2babec0918d4e1e79d3608f5312dcb45b7900beaa61461afe0c8723cb"
  }


export default class SFuncApi
{
    static post(sApiName,oParam,fCallBack)
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
