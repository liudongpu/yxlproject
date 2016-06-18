//import React, { Component } from 'react';
import {


    StyleSheet
} from 'react-native';

export default  PStyleBase = StyleSheet.create({
    container: {
      flex: 4,
      //justifyContent: 'center',
      marginTop: 100,
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
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
    backgroundColor: '#81c04d',
    paddingTop: 12,
    paddingBottom: 10,
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
