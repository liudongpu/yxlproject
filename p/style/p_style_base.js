//import React, { Component } from 'react';
import {


    StyleSheet
} from 'react-native';

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
    backgroundColor: '#F37474',
    paddingTop: 12,
    paddingBottom: 10,
  },

  // 左面导航按钮
  navLeftButton: {
    color: '#ffffff',
    fontSize: 18,
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
  }

});
