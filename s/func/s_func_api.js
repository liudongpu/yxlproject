
import SFuncTop from '../../s/func/s_func_top';


const apiZooConfig={
    "key": "tesetkey",
    "token": "6ca95252996b4c4880d3d927e7e436a8cbac2ae686704802a9469bf88c342e856b8c4361"
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
