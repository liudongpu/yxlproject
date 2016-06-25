
const event_caches={};

export default class SFuncEvent
{

  static addEvent(sTarget,fCallBack)
  {
    if(!event_caches[sTarget])
    {
      event_caches[sTarget]=[];
    }
    event_caches[sTarget][0]=fCallBack;
  }

  static removeEvent(sTarget)
  {
    event_caches[sTarget]=[];
  }

  static fireEvent(sTarget,oParams)
  {
    if(event_caches[sTarget]&&event_caches[sTarget].length>0)
    {
      for(var i in event_caches[sTarget])
      {
        var f=event_caches[sTarget][i];
        f(oParams);
      }
    }
  }


}
