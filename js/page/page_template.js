'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    Platform,
    Navigator,
    StyleSheet
} from 'react-native';

export default class PageTemplate extends Component {
  constructor(props) {
          super(props);
          this.state = {};
      }
  onPressFeed() {
 const { navigator } = this.props;

     navigator.push({name: 'feed'});
 }


    render() {

      return (
          <View style={styles.container}>

            <Text style={styles.welcome}>
              {this.props.title}
            </Text>
            <Text style={styles.welcome} onPress={this.onPressFeed.bind(this)}>
              feed
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
