/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    StyleSheet
} from 'react-native';

export default class CommonHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                {this.props.text}
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ccontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
});
