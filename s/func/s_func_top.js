
import PConfigBase from '../../p/config/p_config_base';
import PLangBase from '../../p/lang/p_lang_base';
import PStyleImage from '../../p/style/p_style_image';

import {
  Alert,

} from 'react-native';


export default class SFuncTop
{
    static topLangBase()
    {
      return PLangBase;
    }

    static topStyleImage()
    {
      return PStyleImage;
    }

    static topConfigBase()
    {
      return PConfigBase;
    }

    //异常提示
    static msgCatch(sMessage)
    {
      var oCatchLang=PLangBase.upCatch();
      for(var p in oCatchLang)
      {

        if(sMessage.indexOf(p)>-1)
        {
          sMessage=sMessage.replace(p,oCatchLang[p]);
        }

      }


      this.msgAlert(sMessage,oCatchLang.default);
    }



    static msgAlert(sMessage,sTitle)
    {
      Alert.alert(
        sTitle?sTitle:'',
        sMessage,
        [
          //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      )

    }

}
