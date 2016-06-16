import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import CommonHeader from '../common/header';


export default class MainMain extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <CommonHeader>
                </CommonHeader>
                <TabNavigator>

                </TabNavigator>
            </View>
        );
    }
}
