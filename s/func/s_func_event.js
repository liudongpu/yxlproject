
const event_caches={};

const nav_caches=new Map();


export default class SFuncEvent
{

  /**
  添加全局监听事件   注意监听一次只能添加一种 暂不支持同一事件的多次监听
  调用完监听后  在componentWillUnmount(){}时最好调用下removeEvent
  */
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


  static navInitEvent(nav)
  {
    nav.navigationContext.addListener('didfocus', this.navFireEvent);
  }
  static navFireEvent(router)
  {

    var oData=router._data.route;
    //console.warn(JSON.stringify(oData));
    var sName=oData.name;
    if(nav_caches.has(sName))
    {
      nav_caches.get(sName)();
    }

  }

  static navAddEvent(sName,fCall)
  {
    nav_caches.set(sName,fCall);
  }



}
