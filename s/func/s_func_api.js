
import SFuncTop from '../../s/func/s_func_top';

export default class SFuncApi
{
    static post(sApiName,oParam,fCallBack)
    {
      //return sUrl;
      fetch(SFuncTop.topConfigBase().upApiConfig().apiUrl+sApiName,{method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },body: JSON.stringify(oParam)})
          .then((response) => response.json())
          .then((responseData) => {
              if(responseData.state==1)
              {

                fCallBack(responseData);
              }
              else {

                SFuncTop.msgAlert(responseData.error);
              }
          })
          .catch((error) => {
            console.warn(error);
            SFuncTop.msgAlert(SFuncTop.topLangBase().upLang('system_network_error'));
          })
          .done();


    }

}
