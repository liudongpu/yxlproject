import {


    StyleSheet
    , Dimensions, PixelRatio,Platform
} from 'react-native';




export default  PStyleProject = StyleSheet.create({



  peopleImageList:
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
