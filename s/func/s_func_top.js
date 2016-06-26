
import PConfigBase from '../../p/config/p_config_base';
import PLangBase from '../../p/lang/p_lang_base';
import PStyleImage from '../../p/style/p_style_image';
import PStyleBase from '../../p/style/p_style_base';

import {
  Alert,

} from 'react-native';


export default class SFuncTop
{
    static topLangBase()
    {
      return PLangBase;
    }

    static topStyleBase()
    {
      return PStyleBase;
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



    // 获取图片缩略图
	static upImageThumber(sSource, iSize, iType) {

    //定义如果没有存在/s-标记的图片 则不执行压缩处理
    if(sSource.indexOf('/s-')<0)
    {
      return sSource;
    }

  		var sSplit = sSource.split("/");

  		for (var i = 0, j = sSplit.length; i < j; i++) {
  			if (sSplit[i].indexOf(".") > 0) {
  				sSplit[i] = sSplit[i] + "/gm";
  				break;
  			}
  		}

  		if (!iType) {
  			// 定义如果没有传type，则自动给一个默认的，服务器删除缓存文件时依据此编号删除 该参数仅用于标记
  			iType = '2606';
  		}

  		var aFix = sSource.split(".");

  		var sFix = aFix[aFix.length - 1];
  		// sFix = 'webp';
  		var sReturn = sSplit.join("/") + '_g_t' + iType + '_w' + iSize
  				+ '_h9999.' + sFix;

  		return sReturn;
  	}



    static msgAlert(sMessage,sTitle,fOk)
    {
      Alert.alert(
        sTitle?sTitle:'',
        sMessage,
        [
          //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          { onPress: () => {  if(fOk!=undefined){fOk()} }},
        ]
      )

    }

}
