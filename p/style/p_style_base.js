//import React, { Component } from 'react';
import {


    StyleSheet
    , Dimensions, PixelRatio
} from 'react-native';


const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default  PStyleBase = StyleSheet.create({
    container: {
      flex: 4,
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
      backgroundColor: '#EF4B4B',
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
      width:width,
      alignItems:'center',
      overflow:'hidden',
    },

    homeUserViewBackText:
    {
      textAlign: 'center',
      marginTop:110,
      padding:5,
      opacity:0.8,
      borderRadius:5
    },

    homeUserListInfo:
    {
      backgroundColor: '#ffffff',
      marginTop:15,

    }

});
