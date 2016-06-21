//import React, { Component } from 'react';
import {


    StyleSheet
    , Dimensions, PixelRatio
} from 'react-native';


const topWindow = {width,height}=Dimensions.get("window");

//导航条的颜色
const topColor={

   navColor:'#EF4B4B',

};

export default  PStyleBase = StyleSheet.create({
    wFlex:
    {
      flex:1
    },
    wDirectionRow:
    {

      flexDirection: 'row'
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
      marginTop:10
    },
    cListIconLeft:
    {

    },
    cListIconCenter:
    {
      flex:1,
      borderBottomWidth: 1,
      borderBottomColor: '#ebebeb',
      height:50,
      justifyContent: 'center',

    },
    cListIconRight:
    {
      borderBottomWidth: 1,
      borderBottomColor: '#ebebeb',
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
      paddingTop: 15,
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
      marginTop:15,
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
      paddingLeft:15,
      paddingTop:5,
      borderBottomWidth: 1,
      borderBottomColor: '#ebebeb',
    },
    cListViewRight:
    {
      height:50,
      borderBottomWidth: 1,
      borderBottomColor: '#ebebeb',
      paddingTop:10,


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
      color : '#cccccc',
      fontSize : 20,
      textAlign : 'left',
      width:30,
    },

    container: {
      flex: 1,
      //justifyContent: 'center',
      marginTop:60,
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
      paddingTop: 12,
      paddingBottom: 10,
    },

    // 左面导航按钮
    navLeftButton: {
      color: '#ffffff',
      fontSize: 16,
      marginLeft: 13
    },

    navTitle:{

      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      flex: 1                //Step 3
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
      borderColor:'#ffffff',
      borderWidth:2,
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
      borderColor: '#cccccc',
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
      borderWidth:1,
      borderColor:'#f3a5a5'
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
      marginTop:10

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
      padding:10,
    }


});
