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
      activity: 'Enter an activity',
      time: 'Enter time spent',
      total: ''

    }
    
  }
 
  
  render() {
    const state = this.state;

    let setter = (text) => {
      this.setState({activity: text}, () => {activityTot()})
     
    }

    

    let activityTot = () => {
      const rowData = [];

  
    
      rowData.push(this.state.activity)
      this.setState({tableData2: rowData})
    }

    let setter2 = (text) => {
      this.setState({time: text}, () => setter3())
    }

    let setter3 = (text) => {

      
      const tableData1 = this.state.tableData;
      const rowData = this.state.tableData2;

      rowData.push(this.state.time);

    
      tableData1.push(rowData);
  
      this.setState({tableData: tableData1})

      const empty = [];
      this.setState({tableData2: empty}, () => {total()} )
      }


    let total = () => {
      let sum=0;
      for(let i=0; i<this.state.tableData.length; i++){
        sum += parseInt(this.state.tableData[i][1], 10)
      }

      console.log(sum)
      this.setState({total: sum}), () => {}
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
              setter(text)
              activityTot();
             }
          }
        
         /> 

           <TextInput 
          style = {styles.fill} 
          editable = {true}
          value = {this.state.time}
          onSubmitEditing ={ (event) => {
            let text = event.nativeEvent.text;
            setter2(text)
           
        }
    

          }
          
       
        /> 

        <Text> {this.state.activity}</Text>
        

        {/*    <TextInput style = {styles.fill} onChangeText={() => this.setState({tableData: tableData1})}/>*/}
        <Text> {this.state.time} </Text>
        <Text> {this.state.total} </Text>
   
=
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


