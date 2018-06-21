import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, Image, Linking, ScrollView, Picker, TextInput} from 'react-native';

import Icon from '../components/icon.js';
import AskExpert from './AskExpert';
import navigation from 'react-navigation'
import RootStack from './RootStack.js';
import RectIcon from './RectIcon.js';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import styles from './styles.js'


export default class TimeTracking extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head','Head2'],
      tableData: [
        ['1', '2'],
        ['a', 'b'],
        ['1', '2'],
        [' ', ' ']
      ], 
      activity: '',
      time: ''
    }
    
  }
 
  
  render() {
    const state = this.state;


    let update = (text) => {
    {/*}  let tableData = [ state.tableData ];
      tableData[3] = {...tableData[3], key: ' jbhg'};
    this.setState({ tableData });*/}

    const tableData1 = [];
    const rowData = [];
      for (let j = 0; j < 2; j += 1) {
        rowData.push(this.state.activity);
      }
      tableData1.push(rowData);

      this.setState({tableData: tableData1})
    ;
    }

    return (
      <ScrollView style = {styles.fill}>
      <View style={styles1.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles1.head} textStyle={styles1.text}/>
          <Rows data={this.state.tableData} textStyle={styles1.text}/>
          
        </Table>
        <TextInput 
          style = {styles.fill} 
          onChangeText={
            (text) => {this.setState({activity: text})
            update()}
          }
        /> 
        

        {/*    <TextInput style = {styles.fill} onChangeText={() => this.setState({tableData: tableData1})}/>*/}
        <Text> {this.state.activity} </Text>
      </View>
      </ScrollView>
    )
  }
}

let update = function () {
  
}
 
const styles1 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


