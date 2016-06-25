



const form_datas={};
export default class SFuncForm
{

  static initFormData(sPageUnique,oFormData)
  {
    form_datas[sPageUnique]=oFormData;
  }


  static inFormValue(sPageUnique,sDataId,sDataValue)
  {
    this.checkEmpty(sPageUnique);
    form_datas[sPageUnique][sDataId]=sDataValue;
  }


  static upFormValue(sPageUnique,sDataId)
  {
    return form_datas[sPageUnique][sDataId];
  }

  //获取值 如果值不存在 返回空
  static upFormValueDefaultEmpty(sPageUnique,sDataId)
  {
    var sValue=form_datas[sPageUnique][sDataId];
    if(sValue==null||sValue==undefined)
    {
      sValue='';
    }
    return sValue;
  }


  static checkEmpty(sPageUnique)
  {
    if(!form_datas[sPageUnique])
    {
      form_datas[sPageUnique]={};
    }
  }


  static upFormData(sPageUnique)
  {
    this.checkEmpty(sPageUnique);
    return form_datas[sPageUnique];
  }




}
