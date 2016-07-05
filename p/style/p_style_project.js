import {


    StyleSheet
    , Dimensions, PixelRatio,Platform
} from 'react-native';




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


});
