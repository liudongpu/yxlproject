
import {


    Platform
} from 'react-native';

import SFuncApi from '../../s/func/s_func_api';
import SFuncStorage from '../../s/func/s_func_storage';




export default class PCallSystem
{


     static refreshPushInfo()
     {
       var sToken=SFuncStorage.upTempValue('pushinfo','token');

       var pushInfo={
         pushToken:sToken,
         osType:Platform.OS
       };

       SFuncApi.post("api/genapp/post/pushinfo",{
         pushInfo:pushInfo
       },(data)=>{});

     }



}
