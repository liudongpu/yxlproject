
import PConfigBase from '../../p/config/p_config_base';
import PLangBase from '../../p/lang/p_lang_base';

import {
  Alert,

} from 'react-native';


export default class SFuncTop
{
    static topLangBase()
    {
      return PLangBase;
    }

    static topConfigBase()
    {
      return PConfigBase;
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
