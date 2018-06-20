import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, Image, Linking, ScrollView, Picker} from 'react-native';

import Icon from '../components/icon.js';
import AskExpert from './AskExpert';
import navigation from 'react-navigation'
import RootStack from './RootStack.js';
import RectIcon from './RectIcon.js';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class TimeTracking extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head','Head2'],
      tableData: [
        ['1', '2'],
        ['a', 'b'],
        ['1', '2'],
        ['a', 'b']
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles1.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles1.head} textStyle={styles1.text}/>
          <Rows data={state.tableData} textStyle={styles1.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles1 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


