'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
} from 'react-native';
import CommonRoot from '../common/common_root';


import io from 'socket.io-client/socket.io';

const socket = io.connect('https://react-native-webrtc.herokuapp.com', {transports: ['websocket']});

import {
  RTCPeerConnection,
  RTCMediaStream,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStreamTrack,
  getUserMedia,
} from 'react-native-webrtc';

const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};


var webrtc={
  temp:{
    socket:null,
    localStream:null,
    rtcMoudle:null,
    pcPeers:{}
  },
  init:function(){

    webrtc.temp.socket = io.connect('https://react-native-webrtc.herokuapp.com', {transports: ['websocket']});

    webrtc.temp.socket.on('exchange', function(data){
      webrtc.exchange(data);
    });
    webrtc.temp.socket.on('leave', function(socketId){
      webrtc.leave(socketId);
    });

    webrtc.temp.socket.on('connect', function(data) {
      console.log('connect');
      webrtc.getLocalStream(false, function(stream) {
        webrtc.temp.localStream = stream;
        if(webrtc.temp.rtcMoudle!=null)
        {
        webrtc.temp.rtcMoudle.setState({selfViewSrc: stream.toURL()});
        webrtc.temp.rtcMoudle.setState({status: 'ready', info: 'Please enter or create room ID'});
        }
        else
        {
          console.warn('rtcMoudle null');
        }
      });
    });
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
      webrtc.temp.rtcMoudle.setState({info: 'One peer join!'});

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
    webrtc.temp.rtcMoudle.setState({info: 'One peer leave!'});
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
      this.state = {
        info: 'Initializin',
        status: 'init',
        roomID: '',
        isFront: true,
        selfViewSrc: null,
        remoteList: {},
        textRoomConnected: false,
        textRoomData: [],
        textRoomValue: '',
      };
      webrtc.init();
  }

  componentDidMount() {
    webrtc.temp.rtcMoudle = this;
  }
  _press(event) {
    webrtc.temp.rtcMoudle.refs.roomID.blur();
    webrtc.temp.rtcMoudle.setState({status: 'connect', info: 'Connecting'});
    webrtc.join(webrtc.temp.rtcMoudle.state.roomID);
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.info}
        </Text>
        {this.state.textRoomConnected && this._renderTextRoom()}
        <View style={{flexDirection: 'row'}}>
          <Text>
            {this.state.isFront ? "Use front camera" : "Use back camera"}
          </Text>
          <TouchableHighlight
            style={{borderWidth: 1, borderColor: 'black'}}
            onPress={this._switchVideoType}>
            <Text>Switch camera</Text>
          </TouchableHighlight>
        </View>
        { this.state.status == 'ready' ?
          (<View>
            <TextInput
              ref='roomID'
              autoCorrect={false}
              style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({roomID: text})}
              value={this.state.roomID}
            />
            <TouchableHighlight
              onPress={this._press}>
              <Text>Enter room</Text>
            </TouchableHighlight>
          </View>) : null
        }
        <RTCView streamURL={this.state.selfViewSrc} style={styles.selfView}/>
        {
          webrtc.mapHash(this.state.remoteList, function(remote, index) {
            return <RTCView key={index} streamURL={remote} style={styles.remoteView}/>
          })
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  selfView: {
    width: 200,
    height: 150,
  },
  remoteView: {
    width: 200,
    height: 150,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listViewContainer: {
    height: 150,
  },
});
