//import React, { Component } from 'react';
import {


    StyleSheet
    , Dimensions, PixelRatio,Platform
} from 'react-native';


const topWindow = {width,height}=Dimensions.get("window");


const topMargin=Platform.OS === 'ios' ? 68 : 48;

//导航条的颜色
const topColor={

   navColor:'#EF4B4B',

};

export default  PStyleBase = StyleSheet.create({
    wFlex:
    {
      flex:1
    },
    wCenter:
    {
      justifyContent: 'center',
      alignItems: 'center',
    },
    wHeightA:
    {
      height:10,
    },
    wHeightB:
    {
      height:20,
    },
    wHeightC:
    {
      height:30,
    },

    wDirectionRow:
    {

      flexDirection: 'row'
    },
    wArrowTip:
    {
      transform:[{rotate:'45deg'}],
      borderTopWidth:2,
      borderTopColor:'#C8C8CD',
      borderRightColor:'#C8C8CD',
      borderRightWidth:2
    },

    cFormPageBack:
    {
      backgroundColor:'#efeff2'
    },
    cFormPageBox:
    {
      marginTop:20
    },
    cFormPageItem:
    {
      flexDirection: 'row',

      borderBottomWidth:1,
      borderBottomColor:'#dedede',
      backgroundColor:'#ffffff',


    },
    cFormPageLeft:
    {
      width:80,

    },
    cFormPageText:
    {
      marginTop:18,
      marginLeft:15,
      marginBottom:12,
      fontSize:16,

    },
    cFormPageButton:
    {
      width:topWindow.width-30,
      marginLeft:15,
      backgroundColor:'#fc5755',
      height:42,
      marginTop:20,
      alignItems:'center',
      borderRadius:5
    },
    cFormPageOperate:
    {
      textAlign:'center',
      color:'#ffffff',
      fontSize:20,
      marginTop:10,

    },

    cFormPageLabel:
    {

    },
    cFormPageCenter:
    {
      flex:1
    },

    cFormSwitch:
    {

      marginTop:10,
      marginLeft:40
    },

    cFormTextInput:
    {
      height:35,

      backgroundColor:'#ffffff',
      marginTop:10,
      marginLeft:10,

    },
    cFormTextArea:
    {


      backgroundColor:'#ffffff',
      marginTop:10,
      fontSize:16,
      marginLeft:10,
      marginBottom:10,
    },
    cFormArrowBox:
    {

      flexDirection: 'row',
    },
    cFormArrowShow:
    {
      flex:1,
      marginTop:10,
      marginLeft:10

    },
    cFormArrowRight:
    {

      width:10,
      height:10,
      marginTop:20,
      marginRight:15
    },

    cFormUploadBox:
    {

      flexDirection: 'row',
    },
    cFormUploadLeft:
    {
      width:100,
      height:100,

    },
    cFormUploadRight:
    {
      flex:1,
    },
    cFormUploadTouch:
    {
      width:80,
      height:80,

      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'column',


    },
    cFormUploadChoose:
    {
      width:40,
      height:40,


    },
    cFormUploadText:
    {
      width:100,
      textAlign:'center',
      color:'#cccccc'


    },
    cFormUploadImage:
    {
      width:50,
      height:50,
      margin:10,
      borderColor:'#cccccc',
      borderWidth:1,
    },



    cListIconItem:
    {
      flex: 1,
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',

    },
    cListIconSplit:
    {
      marginTop:15
    },
    cListIconLeft:
    {

    },
    cListIconBorder:
    {
      borderTopWidth: 1,
      borderTopColor: '#ebebeb',
    },

    cListIconCenter:
    {
      flex:1,

      height:50,
      justifyContent: 'center',

    },
    cListIconRight:
    {

      height:50,
      justifyContent: 'center',
    },
    cListIconImage:
    {
      width : 30,
      height : 30,
      margin: 10,
    },
    cListIconText:
    {
      fontSize : 16,
      flex:1,
      textAlign : 'left',
      marginTop: 15,
    },
    cListIconLink:
    {
      color : '#cccccc',
      fontSize : 14,
      textAlign : 'left',
      width:30,
    },


    cListViewItem:
    {
      flex: 1,
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    cListViewBox:
    {
      flex: 1,
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    cListViewImage:
    {
      width : 30,
      height : 30,
      margin: 10,
      marginLeft: 0,
    },
    cListViewLeft:
    {
      width : 50,
      height : 50,

      marginLeft:10,
      marginRight:10,
      marginTop:5,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor:'#cccccc',
    },
    cListViewName:
    {
      color:'#ffffff'
    },

    cListViewCenter:
    {
      flex: 1,
      height:50,
      marginLeft:10,

      marginTop:20,
      borderBottomWidth: 1,
      borderBottomColor: '#ebebeb',
    },
    cListViewRight:
    {
      height:50,
      marginTop:20,
      borderBottomWidth: 1,
      borderBottomColor: '#ebebeb',



    },
    cListViewText:
    {
      fontSize : 16,
      textAlign : 'left',
    },
    cListViewDesc:
    {
      paddingTop:5,
      color:'#cccccc',
    },
    cListViewIcon:
    {

      width:10,
      height:10,
      marginTop:10,
      marginRight:15


    },

    cModalLoadBack:
    {
      height:topWindow.height,
      alignItems: 'center',
      justifyContent: 'center',


    },
    cModalLoadBox:
    {
      borderRadius:10,
      backgroundColor:'#fbfbfb',
      width:120,
      height:120,

    },
    cModalLoadIndicator:
    {
      height: 40,
      marginTop:10,
    },

  cModalLoadText:
  {
    marginTop:20,
    textAlign:'center',
    fontSize:16,
    height:20,
  },









    container: {
      flex: 1,
      //justifyContent: 'center',
      marginTop:topMargin,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

    headerView:{

    },

    // 导航栏
    navContainer: {
      backgroundColor: topColor.navColor,

      flexDirection: 'row',
      flex:1,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      height: Platform.OS === 'ios' ? 68 : 48,
      width:topWindow.width,
      alignItems: 'center',


    },
    navCenter:
    {
      flex:1,
      width:topWindow.width-100,
    },

    // 左面导航按钮
    navLeftButton: {
      color: '#ffffff',
      fontSize: 16,
      marginLeft: 12,
      fontWeight: 'bold',
      marginTop:16,
    },
    navLeft:
    {
      width:50
    },
    navRight:
    {
      width:50
    },
    navTitle:{
      marginTop:16,
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',

      justifyContent: 'center',
      fontWeight: 'bold',
      flex: 1,

    },
    mainMainTable:
    {
      height: 52,
      backgroundColor: '#fdfdfd',
      alignItems: 'center',
    },
    homeUserViewBack:
    {
      backgroundColor: '#efeff2',
      flex:1
    },

    homeUserViewBackImage:
    {
      height: 159,
      width:topWindow.width,
      alignItems:'center',
      overflow:'hidden',
    },
    homeUserViewBackPeople:
    {
      width:80,
      height:80,
      borderRadius:40,

      marginTop:20,
    },

    homeUserViewBackText:
    {
      textAlign: 'center',
      marginTop:10,
      padding:5,
      opacity:0.8,
      borderRadius:5
    },

    homeUserListInfo:
    {
      backgroundColor: '#ffffff',
      marginTop:15,

    },
    homeIndexTextInput:
    {
      height: 30,
      borderColor: '#C8C8CD',
      borderWidth: 1,
      margin:10,
      backgroundColor:'#ffffff',
      borderRadius:5,
      paddingLeft:10
    },

    peopleInfoTop:
    {
      backgroundColor: topColor.navColor,
    },

    peopleInfoBg:
    {
      height: 180,
      width:topWindow.width,
      alignItems:'center',
      overflow:'hidden',

    },
    peopleInfoRadius:
    {
      marginTop:10,
      width:80,
      height:80,
      padding:4,
      borderRadius:40,
      borderWidth:1,
      borderColor:'#f3a5a5'
    },

    peopleInfoImg:
    {
      width:70,
      height:70,
      borderRadius:35,

    },
    peopleInfoCard:
    {
      marginTop:10,
      flexDirection: 'row',
      flex:1,
      width:topWindow.width,

    },

    peopleInfoCardCell:
    {
        flex:1,
        height:40,
        alignItems:'center'
    },
    peopleInfoCardImage:
    {
      width:30,
      height:30,

    },
    peopleInfoCardText:
    {
      color:'#ffffff',
      marginTop:10,
      textAlign:'center',

    },
    peopleInfoCardBorder:
    {


    },
    peopleInfoAdd:
    {
      textAlign:'center',
      color:'#2f2f2f',
      marginTop:30,
      marginBottom:20
    },
    peopleInfoLine:
    {
        color:'#dedede'
    },
    peopleInfoItem:
    {
      marginTop:10,
      flexDirection: 'row',
      flex:1,
      width:topWindow.width,
    },
    peopleInfoItemBox:
    {
      flex:1,
      alignItems:'center'
    },
    peopleInfoItemImage:
    {
      width:100,
      height:100,
    },
    peopleInfoItemText:
    {
      margin:10,
      flex:1,
      textAlign:'center',
    }


});
