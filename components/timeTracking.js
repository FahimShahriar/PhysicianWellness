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
      tableData: [
       
      ], 
      activity: 'Enter an activity',
      time: 'Enter time spent',
      total: 111

    }
    
  }
 
  
  render() {
    const state = this.state;


    let update = (text) => {
    {/*}  let tableData = [ state.tableData ];
      tableData[3] = {...tableData[3], key: ' jbhg'};
    this.setState({ tableData });*/}

    this.setState({activity: text})
    const tableData1 = [];
    const rowData = [];
      for (let j = 0; j < 2; j += 1) {
        rowData.push(this.state.activity);
      }
      tableData1.push(rowData);

      this.setState({tableData: tableData1})
      
    ;
    }

    let total = () => {
      let sum=0;
      for(let i=0; i< this.state.tableData.length; i+=1){
        sum += this.state.tableData[i][1];
        console.log(this.state.tableData[i][1])
      }

      this.setState({total: sum})

      total();
     
      
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
          editable = {true}
          value = {this.state.activity}
          onSubmitEditing ={ 
            
            (event) => {
            let text = event.nativeEvent.text;
           

            
               this.setState({activity: text})
               const tableData1 = [];
          const rowData = [];
    for (let j = 0; j < 2; j += 1) {
      rowData.push(this.state.activity);
    }
    tableData1.push(rowData);

    this.setState({tableData: tableData1}) 
    total()}
    

          }
          
          onChangeText ={(text) => update (text) }
        /> 

        <Text> {this.state.total}</Text>
        

        {/*    <TextInput style = {styles.fill} onChangeText={() => this.setState({tableData: tableData1})}/>*/}
        <Text> {this.state.activity} </Text>
   
            
            
            title = {'submit'}/>
      </View>
      </ScrollView>
    )
  }
}



 
const styles1 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


