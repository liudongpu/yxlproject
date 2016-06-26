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

    marginTop:20,
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

    flex:1,
    marginBottom:20,
  },
  userLoginLabel:
  {
    width:80,
    fontSize:18,
    marginLeft:10,
    marginBottom:20,

  },
  userLoginButton:
  {

    marginLeft:15,
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



});
