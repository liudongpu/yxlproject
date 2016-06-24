



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
