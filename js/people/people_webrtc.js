'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  ListView,
} from 'react-native';
import CommonRoot from '../common/common_root';
const topWindow = {width,height}=Dimensions.get("window");

import SFuncStorage from '../../s/func/s_func_storage';

import io from 'socket.io-client/socket.io';

//const socket = io.connect('https://web-rtc-server.yinxl.com', {transports: ['websocket']});

import {
  RTCPeerConnection,
  RTCMediaStream,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStreamTrack,
  getUserMedia,
} from 'react-native-webrtc';

//const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
const configuration = {"iceServers": [{"url": "turn:webrtc-turn-server.yinxl.com:3478","username": "yinxlrtc","credential": "wwwyinxlcom"}]};

var rtcData={};

var rtcUserGroup='';

var webrtc={
  temp:{
    socket:null,
    localStream:null,
    rtcMoudle:null,
    pcPeers:{}
  },
  init:function(){

    webrtc.temp.socket = io.connect('https://web-rtc-server.yinxl.com', {transports: ['websocket']});

    webrtc.temp.socket.on('exchange', function(data){
      webrtc.exchange(data);
    });
    webrtc.temp.socket.on('leave', function(socketId){
      webrtc.leave(socketId);
    });
    webrtc.temp.socket.on('rtc_refresh', function(data){
      rtcData=JSON.parse(data);
      //webrtc.temp.rtcMoudle._setModalVisible(true);
    });

    webrtc.temp.socket.on('connect', function(data) {
      console.log('connect');
      webrtc.getLocalStream(false, function(stream) {
        webrtc.temp.localStream = stream;
        if(webrtc.temp.rtcMoudle!=null)
        {
        webrtc.temp.rtcMoudle.setState({selfViewSrc: stream.toURL()});
        webrtc.temp.rtcMoudle.setState({status: 'ready', info: '请点击连接……'});
        }
        else
        {
          console.warn('rtcMoudle null');
        }
      });
    });
    //连接成功后发送一条空消息  触发notice_all
    webrtc.temp.socket.emit('rtc_user','');
  },
  getLocalStream:function(isFront, callback) {
    MediaStreamTrack.getSources(sourceInfos => {
      console.log(sourceInfos);
      let videoSourceId;
      for (const i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if(sourceInfo.kind == "video" && sourceInfo.facing == (isFront ? "front" : "back")) {
          videoSourceId = sourceInfo.id;
        }
      }
      getUserMedia({
        audio: true,
        video: {
          mandatory: {
            minWidth: 500, // Provide your own width, height and frame rate here
            minHeight: 300,
            minFrameRate: 30
          },
          facingMode: (isFront ? "user" : "environment"),
          optional: [{ sourceId: sourceInfos.id }]
        }
      }, function (stream) {
        console.log('dddd', stream);
        callback(stream);
      }, webrtc.logError);
    });

  },

   join:function(roomID) {
    webrtc.temp.socket.emit('join', roomID, function(socketIds){
      console.log('join', socketIds);
      for (const i in socketIds) {
        const socketId = socketIds[i];
        webrtc.createPC(socketId, true);
      }
    });
  },
  createPC:function(socketId, isOffer) {
    const pc = new RTCPeerConnection(configuration);
    webrtc.temp.pcPeers[socketId] = pc;

    pc.onicecandidate = function (event) {
      console.log('onicecandidate', event.candidate);
      if (event.candidate) {
        webrtc.temp.socket.emit('exchange', {'to': socketId, 'candidate': event.candidate });
      }
    };

    function createOffer() {
      pc.createOffer(function(desc) {
        console.log('createOffer', desc);
        pc.setLocalDescription(desc, function () {
          console.log('setLocalDescription', pc.localDescription);
          webrtc.temp.socket.emit('exchange', {'to': socketId, 'sdp': pc.localDescription });
        }, webrtc.logError);
      }, webrtc.logError);
    }

    pc.onnegotiationneeded = function () {
      console.log('onnegotiationneeded');
      if (isOffer) {
        createOffer();
      }
    }

    pc.oniceconnectionstatechange = function(event) {
      console.log('oniceconnectionstatechange', event.target.iceConnectionState);
      if (event.target.iceConnectionState === 'completed') {
        setTimeout(() => {
          webrtc.getStats();
        }, 1000);
      }
      if (event.target.iceConnectionState === 'connected') {
        createDataChannel();
      }
    };
    pc.onsignalingstatechange = function(event) {
      console.log('onsignalingstatechange', event.target.signalingState);
    };

    pc.onaddstream = function (event) {
      console.log('onaddstream', event.stream);
      webrtc.temp.rtcMoudle.setState({info: '连接成功!'});

      const remoteList = webrtc.temp.rtcMoudle.state.remoteList;
      remoteList[socketId] = event.stream.toURL();
      webrtc.temp.rtcMoudle.setState({ remoteList: remoteList });
    };
    pc.onremovestream = function (event) {
      console.log('onremovestream', event.stream);
    };

    pc.addStream(webrtc.temp.localStream);
    function createDataChannel() {
      if (pc.textDataChannel) {
        return;
      }
      const dataChannel = pc.createDataChannel("text");

      dataChannel.onerror = function (error) {
        console.log("dataChannel.onerror", error);
      };

      dataChannel.onmessage = function (event) {
        console.log("dataChannel.onmessage:", event.data);
        webrtc.temp.rtcMoudle.receiveTextData({user: socketId, message: event.data});
      };

      dataChannel.onopen = function () {
        console.log('dataChannel.onopen');
        webrtc.temp.rtcMoudle.setState({textRoomConnected: true});
      };

      dataChannel.onclose = function () {
        console.log("dataChannel.onclose");
      };

      pc.textDataChannel = dataChannel;
    }
    return pc;
  },


   exchange:function(data) {
    const fromId = data.from;
    let pc;
    if (fromId in webrtc.temp.pcPeers) {
      pc = webrtc.temp.pcPeers[fromId];
    } else {
      pc = webrtc.createPC(fromId, false);
    }

    if (data.sdp) {
      console.log('exchange sdp', data);
      pc.setRemoteDescription(new RTCSessionDescription(data.sdp), function () {
        if (pc.remoteDescription.type == "offer")
          pc.createAnswer(function(desc) {
            console.log('createAnswer', desc);
            pc.setLocalDescription(desc, function () {
              console.log('setLocalDescription', pc.localDescription);
              webrtc.temp.socket.emit('exchange', {'to': fromId, 'sdp': pc.localDescription });
            }, webrtc.logError);
          }, webrtc.logError);
      }, webrtc.logError);
    } else {
      console.log('exchange candidate', data);
      pc.addIceCandidate(new RTCIceCandidate(data.candidate));
    }
  },
   leave:function(socketId) {
    console.log('leave', socketId);
    const pc = webrtc.temp.pcPeers[socketId];
    const viewIndex = pc.viewIndex;
    pc.close();
    delete webrtc.temp.pcPeers[socketId];
    const remoteList = webrtc.temp.rtcMoudle.state.remoteList;
    delete remoteList[socketId]
    webrtc.temp.rtcMoudle.setState({ remoteList: remoteList });
    webrtc.temp.rtcMoudle.setState({info: '连接失败!'});
  },

   logError:function(error) {
    console.log("logError", error);
  },

   mapHash:function(hash, func) {
    const array = [];
    for (const key in hash) {
      const obj = hash[key];
      array.push(func(obj, key));
    }
    return array;
  },

   getStats:function() {
    const pc = webrtc.temp.pcPeers[Object.keys(webrtc.temp.pcPeers)[0]];
    if (pc.getRemoteStreams()[0] && pc.getRemoteStreams()[0].getAudioTracks()[0]) {
      const track = pc.getRemoteStreams()[0].getAudioTracks()[0];
      console.log('track', track);
      pc.getStats(track, function(report) {
        console.log('getStats report', report);
      }, webrtc.logError);
    }
  }


};



































export default class PeopleWebrtc  extends CommonRoot {


  constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});

      var sLogin=SFuncStorage.upTempValue('user','loginName');
      var sMemberCode=this.rootNavParams('pCode');


      var dsDoc = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


      this.state = {
        info: '正在初始化，请稍等……',
        status: 'init',
        docDataSource:dsDoc.cloneWithRows(['row 1', 'row 2']),
        docAllSum:0,
        selectGroup:'',
        memberCode:sMemberCode,
        userCode:sLogin,
        roomID: sLogin,
        isFront: true,
        selfViewSrc: null,
        remoteList: {},
        textRoomConnected: false,
        textRoomData: [],
        textRoomValue: '',
        modalVisible:false
      };
      webrtc.init();
  }

  componentDidMount() {
    webrtc.temp.rtcMoudle = this;
  }

  componentWillUnmount(){

    webrtc.temp.socket.disconnect();
  }

  _press(event) {

    var oUser = {
            userCode: webrtc.temp.rtcMoudle.state.userCode,
            memberCode: webrtc.temp.rtcMoudle.state.memberCode,
            clientType: 'appclient',
            roomCode:'',
            userGroup:encodeURIComponent(rtcUserGroup),

        };



    webrtc.temp.socket.emit('rtc_user',JSON.stringify(oUser));

    webrtc.temp.rtcMoudle.setState({status: 'connect', info: '正在连接中……'});
    webrtc.join(webrtc.temp.rtcMoudle.state.roomID);



  }
  _setModalVisible(visible) {
    if(visible==true)
    {

      var oData=[];
      var mGroup = new Map();

      var iAllSum=0;

      for(var p in rtcData)
      {
        var oThis=rtcData[p];
        if(oThis.clientType=='webbrowser')
        {

            if(mGroup.get(oThis.userGroup)==undefined)
            {
              mGroup.set(oThis.userGroup,{group:oThis.userGroup,sum:0,use:0});
            }

            iAllSum++;
            mGroup.get(oThis.userGroup).sum=mGroup.get(oThis.userGroup).sum+1;

            if(oThis.roomCode=='')
            {
              mGroup.get(oThis.userGroup).use=mGroup.get(oThis.userGroup).use+1;
            }


        }

        //oData.push(oThis.userCode);
      }

      mGroup.forEach((value,index)=>{//value为值，index实际上就是key
          oData.push(value);
        });

      this.setState({
          modalVisible:visible,
          docAllSum:iAllSum,
          docDataSource : this.state.docDataSource.cloneWithRows(oData)
      });


    }
    else
    {
      this.setState({modalVisible: visible});
    }


  }

  _switchVideoType() {
    const isFront = !webrtc.temp.rtcMoudle.state.isFront;
    webrtc.temp.rtcMoudle.setState({isFront:isFront});
    webrtc.getLocalStream(isFront, function(stream) {
      if (webrtc.temp.localStream) {
        for (const id in webrtc.temp.pcPeers) {
          const pc = webrtc.temp.pcPeers[id];
          pc && pc.removeStream(webrtc.temp.localStream);
        }
        webrtc.temp.localStream.release();
      }
      webrtc.temp.localStream = stream;
      webrtc.temp.rtcMoudle.setState({selfViewSrc: stream.toURL()});

      for (const id in webrtc.temp.pcPeers) {
        const pc = webrtc.temp.pcPeers[id];
        pc && pc.addStream(webrtc.temp.localStream);
      }
    });
  }
  receiveTextData(data) {
    const textRoomData = webrtc.temp.rtcMoudle.state.textRoomData.slice();
    textRoomData.push(data);
    webrtc.temp.rtcMoudle.setState({textRoomData, textRoomValue: ''});
  }
  _textRoomPress() {
    if (!webrtc.temp.rtcMoudle.state.textRoomValue) {
      return
    }
    const textRoomData = webrtc.temp.rtcMoudle.state.textRoomData.slice();
    textRoomData.push({user: 'Me', message: webrtc.temp.rtcMoudle.state.textRoomValue});
    for (const key in webrtc.temp.pcPeers) {
      const pc = webrtc.temp.pcPeers[key];
      pc.textDataChannel.send(webrtc.temp.rtcMoudle.state.textRoomValue);
    }
    webrtc.temp.rtcMoudle.setState({textRoomData, textRoomValue: ''});
  }
  _renderTextRoom() {
    return (
      <View style={styles.listViewContainer}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.state.textRoomData)}
          renderRow={rowData => <Text>{`${rowData.user}: ${rowData.message}`}</Text>}
          />
        <TextInput
          style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={value => this.setState({textRoomValue: value})}
          value={this.state.textRoomValue}
        />
        <TouchableHighlight
          onPress={this._textRoomPress}>
          <Text>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onPressNews(news){

    this._setModalVisible(false);


    rtcUserGroup=news.group;
    this._press();
  }

  renderNews(news) {

    var aBgColors=['#DDDDDD','#99CC33'];

    var iIndex=news.use==0?0:1;
    //var iIndex=Math.floor(iSource%aBgColors.length);
    //var iIndex=3;

    var sBgColor=aBgColors[iIndex];
    return (
        <TouchableOpacity onPress={()=>{this.onPressNews(news)}}>
            <View style={[styles.modalItem,{backgroundColor:sBgColor}]}>
              <Text style={styles.modalItemText}>{news.group}(在线{news.sum}医生)    空闲:{news.use}医生</Text>
            </View>
        </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={this.rootStyleBase().container}>
        <View style={styles.main}>
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={[styles.modalContainer]}>
            <View style={[styles.modalInnerContainer]}>
              <Text>请选择科室(共计在线{this.state.docAllSum}医生)：</Text>
              <ListView
              dataSource={this.state.docDataSource}
              renderRow={this.renderNews.bind(this)}
              style={[styles.modalList]}
               />
               <View style={[styles.modalButtonBox]}>
                 <TouchableOpacity onPress={this._setModalVisible.bind(this, true)}>
                  <View style={styles.modalButtonView}>
                    <Text style={styles.modalButtonText}>刷新</Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={this._setModalVisible.bind(this, false)}>
                 <View style={styles.modalButtonView}>
                   <Text style={styles.modalButtonText}>关闭</Text>
                 </View>

               </TouchableOpacity>
               </View>


            </View>
          </View>
        </Modal>

          <ScrollView style={styles.video}>
            {
              webrtc.mapHash(this.state.remoteList, function(remote, index) {
                return <RTCView key={index} streamURL={remote} style={styles.remoteView}/>
              })
            }
          </ScrollView>
          <View style={styles.option}>


            <View  style={styles.optionLeft}>


              { this.state.status == 'ready' ?
                (<View>

                  <TouchableOpacity
                    onPress={() => {this._setModalVisible(true)}}>
                    <View style={styles.iconBtn}>
                      <Text style={styles.iconText}>连接</Text>
                    </View>
                  </TouchableOpacity>
                </View>) : null
              }
            </View>
            <View  style={styles.optionCenter}>
              <Text style={styles.welcome}>
                {this.state.info}
              </Text>
            </View>
            <View style={styles.optionRight}>
              <RTCView streamURL={this.state.selfViewSrc} style={styles.selfView}/>
            </View>

          </View>

        </View>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  main:{
    flexDirection:'column',
    justifyContent:'flex-end',
    flex:1,
  },
  video:
  {
    flex:1,
  },
  option:{
    height:122,
    padding:10,
    borderTopWidth:1,
    borderTopColor:'#cccccc',
    flexDirection:'row',
    backgroundColor:'#f8f8f8',
  },
  optionLeft:
  {

    width:100,
  },
  optionCenter:
  {
    flex:1,

  },
  optionRight:
  {
    width:100,
  },
  selfView: {
    width:100,
    height: 100,
  },
  remoteView: {
    width: topWindow.width,
    height:300,
    marginTop:10,
  },

  welcome: {

    textAlign: 'center',
    margin: 10,
  },
  listViewContainer: {
    height: 150,
  },
  iconBtn:
  {
    width : 90,
    height : 90,

    marginLeft:10,
    marginRight:10,
    marginTop:5,
    marginBottom:10,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:'#FF9900',
  },
  iconText:
  {
    color:'#ffffff',
    fontSize:25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,

    backgroundColor:'rgba(0, 0, 0, 0.5)',
  },
  modalInnerContainer: {


    backgroundColor: '#fff',
     padding: 20,

  },
  modalList:{
    height:300,

  },
  modalItem:{
    flex:1,

    marginTop:10,
    padding:5,
  },
  modalItemText:{
    color:'#ffffff',
  },
  modalButtonBox:{
    flexDirection:'row',
    marginBottom:20,
  },
  modalButtonView:{
    backgroundColor: '#FF6666',
    paddingTop:10,
    borderRadius:5,
    marginRight:20,
    height:40,
    width:60,
  },
  modalButtonText:{
    color:'#ffffff',
    textAlign:'center',


  }
});
