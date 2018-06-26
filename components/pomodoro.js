import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, Image, Linking, ScrollView, Picker, TextInput, Button} from 'react-native';
import CountDown from 'react-native-countdown-component';

import Icon from '../components/icon.js';
import AskExpert from './AskExpert';
import navigation from 'react-navigation'
import RootStack from './RootStack.js';
import RectIcon from './RectIcon.js';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import styles from './styles.js'


export default class Pomodoro extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Activity','Time Spent'],
      tableData: [], 
      tableData2: [], 
      activity: '',
      time: '6',
      total: '',
      tableFoot: [],
      filled: false,
      timer: 2,
      yes: true


    }
    
  }
 
  
  render() {
    return (
      <View style = {{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <CountDown
        onPress={() => alert('hello')}
        until = {1500}
        until2 = {300}
        size = {35}
        style = {styles.fill}
      />
    </View>
 
    )
  }
}

class Setter extends Component{
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
      filled: false,
      timer: 2,
      yes: true


    }
    
  }
  render() {

    let setTime = () => {
      this.setState({timer: 5}, () => {})
      console.log(this.state.timer)
      
    }
  return(
    <CountDown
        until={this.state.timer}
       
        onPress={() => alert('hello')}
        size={20}
        style = {styles.fill}
        onFinish = {() => {this.setState({timer: 5}, () => {console.log(this.state.timer)})}
          }
      />
  )
  }
}

class Setter1 extends Component{
  render() {
  return(
    <CountDown
        until={3}
       
        onPress={() => alert('hello')}
        size={20}
        style = {styles.fill}
        onFinish = {() => {}}
      />
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


