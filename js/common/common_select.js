'use strict';
import React, { Component } from 'react';
import {

    Image,
    TextInput,
    View,
    Text,
    ListView,
    Platform,
    TouchableOpacity,
    Navigator,
    WebView,
    StyleSheet
} from 'react-native';
import SFuncForm from '../../s/func/s_func_form';
import SFuncEvent from '../../s/func/s_func_event';

import CommonRoot from '../common/common_root';

export default class CommonSelect extends CommonRoot {

  constructor(props)
  {
    super(props);
    var pField=this.rootNavParams('field');

    var aDs=[];

    var aItem = pField.fieldSource.split('&');

		for ( var i in aItem) {
			var aDetail = aItem[i].split('=');

      aDs.push({n: aDetail[1],v:aDetail[0]});
		}


    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(aDs),
      field:pField
    };



  }


  render() {


    return (
      <View style={this.rootStyleBase().container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}

      />
      </View>
    )
  }

  _renderRow(rowData)
  {
    return (
      <TouchableOpacity onPress={() => {
          var pField=this.state.field;
          SFuncForm.inFormValue(pField.pageUnique,pField.fieldData,rowData.v);

          SFuncEvent.fireEvent('event_common_form_on_select_change',{field:pField,text:rowData.n});
          this.rootNavBack();
        }}>
        <View style={this.rootStyleBase().cFormPageItem}>
           <Text style={this.rootStyleBase().cFormPageText}>{rowData.n}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _pressRow()
  {

  }

}
