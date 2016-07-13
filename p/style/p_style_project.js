import {


    StyleSheet
    , Dimensions, PixelRatio,Platform
} from 'react-native';

const topMargin=Platform.OS === 'ios' ? 68 : 48;



export default  PStyleProject = StyleSheet.create({

  userLoginBox:
  {
    margin:20,
    marginTop:100,
  },
  userLoginItem:
  {
    flexDirection:'row',
    justifyContent:'center',
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#dedede',
  },
  userLoginTitle:
  {
    textAlign:'center',
    fontSize:24,
    marginBottom:40,
  },
  userLoginInput:
  {
    borderWidth:0,
    flex:1,
    marginTop:20,
    backgroundColor:'#ffffff',
    height:35,


  },
  userLoginLabel:
  {
    width:80,

    fontSize:18,
      height:35,
    marginTop:26,




  },
  userLoginButton:
  {
    backgroundColor:'#fc5755',
    height:42,
    marginTop:40,
    alignItems:'center',
    borderRadius:5
  },
  userLoginBtxt:
  {
    textAlign:'center',
    color:'#ffffff',
    fontSize:20,
    marginTop:10,
  },


  userSetBtn:
  {
    margin:20,
  },








  peopleImageList:
  {

    flex: 1,
  },
  peopleImageMtop:
  {
    marginTop:10,
  },
  peopleImageItem:
  {
    margin:8,

    backgroundColor:'#ffffff',
    flex: 1,
    borderRadius:5,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  peopleImageLeft:
  {
    width:100,
    height:100,
  },
  peopleImagePic:
  {
    width:80,
    height:80,
    margin:10,
  },
  peopleImageCenter:
  {
    flex: 1,
    marginLeft:15,
    marginTop:10,

  },
  peopleImageTime:
  {
    color:'#b2b3b6',
    marginTop:10,
  },
  peopleImageRight:
  {
    height:50,
    marginTop:10,
  },


  homeMsgList:
  {

  },
  homeMsgListBack:
  {
    backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
  },

  homeMsgListItem:
  {
    margin:10,

  },
  homeMsgListTop:
  {
    flex:3,
    flexDirection : 'row',


  },
  homeMsgListTip:
  {
    backgroundColor:'#f45555',
    color:'#ffffff',
    fontSize:12,
    height:20,
    padding:3,
    marginLeft:5,
    borderRadius:4,

  },
  homeMsgListName:
  {
    fontSize:20,

  },
  homeMsgListTime:
  {
    flex:1,
    textAlign:'right',
    color:'#afafaf',
  },
  homeMsgListInfo:
  {
    marginTop:10,
    color:'#afafaf',
  },

  userMsgListAll:
  {

  },
  userMsgListBox:
  {
    height:Dimensions.get("window").height-118,
  },
  userMsgListPut:
  {
    height:50,
    backgroundColor:'#fafafc',
    borderTopColor:'#d1d1d1',
    borderTopWidth:1,
    flexDirection : 'row',

    flex:1,


  },
  userMsgInputBox:
  {
    flex:1,
  },
  userMsgListInput:
  {
    height:40,
    margin:5,
    backgroundColor:'#ffffff',
    borderColor:'#c5c8cd',
    borderWidth:1,
    borderRadius:5,


    paddingLeft:10,
  },
  userMsgBtnBox:
  {

    width:80,
  },
  userMsgBtnView:
  {
    flex:1,
    borderColor:'#c5c8cd',
    backgroundColor:'#efeff2',
    borderWidth:1,
    borderRadius:5,
    height:40,
    width:70,
    margin:5,
  },
  userMsgBtnText:
  {
    lineHeight:30,
    fontSize:16,
    textAlign:'center'
  },

  userMsgViewTime:
  {
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#d7d7d9',
    width:160,
    marginLeft:Dimensions.get("window").width/2-80,
    marginTop:15,
  },
  userMsgListTime:
  {

    color:'#ffffff',

    flex:1,
    margin:5,
    textAlign:'center',


  },
  userMsgListName:
  {
    margin:15,
    color:'#a8a9ab',

  },
  userMsgViewContent:
  {
    margin:15,
    marginTop:0,


    borderRadius:10,borderColor:'#d1d1d1',borderWidth:1,

    flex:1,


  },
  userMsgViewContentA:
  {

    backgroundColor:'#ffffff',
    alignSelf:'flex-start',

  },
  userMsgViewContentB:
  {

    alignSelf:'flex-end',
      backgroundColor:'#fc605e',
  },

  userMsgListContent:
  {
    margin:10,


  },
  userMsgListContentA:
  {


  },
  userMsgListContentB:
  {

    color:'#ffffff',
  },
  userMsgInfoBox:
  {
    flex:1,
  },
  userMsgAlignRight:
  {

    textAlign:'right',
  },

  userMsgAlignCont:
  {

    color:'#ffffff'
  },
  peopleAgreeItemBox:
  {

  },
  peopleAgreeItemDate:
  {
    backgroundColor:'#f9f9fa',
    color:'#999999',
    lineHeight:30,
    height:40,
    borderColor:'#cccccc',
    borderWidth:1,
    paddingLeft:10
  },
  peopleAgreeItemInfo:
  {
    margin:10,
    fontSize:14,
  },
  peopleAgreeItemName:
  {
    margin:10,
    fontSize:14,
  },
  peopleAgreeItemAgree:
  {
    margin:10,
    color:'#937558',
    fontSize:14,
  },


});
