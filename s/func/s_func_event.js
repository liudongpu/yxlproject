
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


  /*
  初始化一次导航的监听事件   导航在展示完成后执行的事件需要在这里添加一个监听
  */
  static navInitEvent(nav)
  {
    nav.navigationContext.addListener('didfocus', this.navFireEvent);
  }

  //导航的动画完成时  会触发该方法  该方法判断当前页面是否有加载完成后执行的函数  如果有 则执行
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
  /*
  注册一个页面动画载入完成后执行的函数  注意只支持单事件执行
  */
  static navAddEvent(sName,fCall)
  {
    nav_caches.set(sName,fCall);
  }



}
