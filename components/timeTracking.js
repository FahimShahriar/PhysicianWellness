import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, Image, Linking, ScrollView, Picker, TextInput, Button} from 'react-native';

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
      tableHead: ['Activity','Time Spent'],
      tableData: [], 
      tableData2: [], 
      activity: '',
      time: '',
      total: '',
      tableFoot: [],
      filled: false


    }
    
  }
 
  
  render() {
    const state = this.state;

    let setActivity = (text) => {
      this.setState( 
        {activity: text}, 
        () => { 
          const rowData = [];
          rowData.push(this.state.activity)
          this.setState({tableData2: rowData})
        }
      )
    }

    let setTime = (text) => {
      this.setState(
        {time: text}, 
        () => { 
          const tableData1 = this.state.tableData;
          const rowData = this.state.tableData2;
          rowData.push(this.state.time);
          tableData1.push(rowData);
          this.setState({tableData: tableData1})
          const empty = [];
          this.setState(
            {tableData2: empty}, 
            () => { total() } 
          )
      
        }
      )
    }

    let total = () => {
      let sum=0;
      for(let i=0; i<this.state.tableData.length; i++) {
        sum += parseInt(this.state.tableData[i][1], 10)
      }
      this.setState({total: sum}, () => {})
      }


    return (
      <ScrollView style = {styles.fill}>
      <View style={styles1.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style = {styles.fill}>
          <Row data={state.tableHead} style={styles1.head} textStyle={styles1.text}/>
          <Rows data={this.state.tableData} textStyle={styles1.text}/>
        </Table>

        <View style = {styles.row}>
          <View style = {styles1.container2}>
            <TextInput 
              style = {styles.fill}       
              value = {this.state.activity}
              placeholder = 'Enter an activity'
              editable = {!this.state.filled}
              keyboardShouldPersistTaps={false}
              clearButtonMode="always"
              onSubmitEditing ={ 
                (event, previousState) => {
                  let text = event.nativeEvent.text;
                  setActivity(text)
                  console.log(this.state.filled)
                  this.setState(previousState => {return {filled: !previousState.filled}})
                }
              }
            />
          </View>
          <View style = {styles1.container2}>
            <TextInput 
              style = {styles.container2} 
              editable = {true}
              placeholder = 'Enter a time in minutes'
              value = {this.state.time}
              editable = {this.state.filled}
              clearButtonMode="always"

         
              onSubmitEditing ={ 
                (event) => {
                  let text = event.nativeEvent.text;
                  setTime(text)    
                  this.setState(previousState => {return {filled: !previousState.filled}})
              
                
                }
              }
            /> 
          </View>
        </View>

        <Text> {this.state.activity}</Text>
        

        {/*    <TextInput style = {styles.fill} onChangeText={() => this.setState({tableData: tableData1})}/>*/}
        <Text> {this.state.time} </Text>
        <Text> Total: {this.state.total} </Text>
   
=
      </View>
      </ScrollView>
    )
  }
}



 
const styles1 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',  borderColor: 'rgba(0,0,0,1)',
  borderBottomWidth: 1, },
  container2: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',  borderColor: '#000000',
  borderWidth: 1,  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


