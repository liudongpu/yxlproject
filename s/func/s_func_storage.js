

import {
  AsyncStorage,

} from 'react-native';


const store_base_group='SFuncStorage_Group_';


const store_temp={};



export default class SFuncStorage
{

  static upTempValue(sGroup,sStorageKey)
  {
    var oValue=null;
    if(store_temp[sGroup]&&store_temp[sGroup][sStorageKey])
    {
      oValue=store_temp[sGroup][sStorageKey];
    }

    return oValue;
  }
  static inTempValue(sGroup,sStorageKey,oValue)
  {
    if(!store_temp[sGroup])
    {
      store_temp[sGroup]={};
    }
    store_temp[sGroup][sStorageKey]=oValue;
  }


  static _upItemKey(sGroup,sStorageKey)
  {
    return sGroup+'_'+sStorageKey;
  }

  //获取存储的值 默认返回空   sGroup表示分组  最好一种类型分一种 以方便清除存储  可以为空
  static upItemCallBack(sGroup,sStorageKey,fCallBack)
  {
    AsyncStorage.getItem(this._upItemKey(sGroup,sStorageKey),(err,sValue)=>{ fCallBack(sValue==null?null:JSON.parse(sValue)) });
  }

  //存入值 sGroup表示分组  最好一种类型分一种 以方便清除存储  可以为空
  static inItem(sGroup,sStorageKey,oValue,fCallBack)
  {
    //如果存在group
    if(sGroup)
    {
      //var a=[];
      //a.push(sGroup);
      //将group的值存入指定组
      //AsyncStorage.mergeItem(store_base_group+sGroup,JSON.stringify(a));
    }
    //设置值
     AsyncStorage.setItem(this._upItemKey(sGroup,sStorageKey), JSON.stringify(oValue),fCallBack);

  }

  static delItem(sGroup,sStorageKey,fCallBack)
  {
    AsyncStorage.removeItem(this._upItemKey(sGroup,sStorageKey),fCallBack);
  }

}
