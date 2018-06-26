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

    let setTime = () => {
      this.setState({yes: true}, () => {this.forceUpdate()})
      console.log(this.state.yes)
      
    }

    let setFalse = () =>{
      this.setState({yes: true}, () => {this.forceUpdate()})
      console.log('ffffffffff')
    }

    let setter = () => {
    
     return <CountDown
        
       
        onPress={() => alert('hello')}
        until = {5}
        until2 = {7}
        size={20}
        style = {styles.fill}
       
      />
      
    }

    let setter1 = () => {
     
      return <CountDown
        until={3}
        until  = {5}
       
        onPress={() => alert('bye')}
        size={20}
        style = {styles.fill}
       
      />
    
    }

    let Checker = () => {
      if(this.state.yes === true){
        return <Setter />
      }
      else{
        return <Setter1/>

      }
    }

    let thing = setter()

    let test = () => {

    


      <View style = {styles.fill}>
        
      
      <CountDown
      until={55}
     
      onPress={() => alert('hello')}
      size={20}
      style = {styles.fill}
      onFinish = {() => alert('finished')}
      />

      )

  </View>

        
        
   
          
    }
    


    return (

    
        <View style = {styles.fill}>
        
      
       { thing}
       

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


