import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import styles from './styles.js'
import AskExpert from './AskExpert';
import RootStack from './RootStack.js';
import MSO from './MSO.js';
import {navigation} from 'react-navigation'
import RF from "react-native-responsive-fontsize"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class RectIcon extends Component{
  render(){
    return(
        <View style = {{ flex:1}}>
          <TouchableOpacity 
            style = {{flex:1}}
            onPress= {this.props.click}
          >
            <Card style = {styles.fill} >
              <CardTitle 
                title= {this.props.title} 
                style = {{flex:1,}}
              />
                <CardAction 
                  separator={true} 
                  inColumn={false}
                  style = {styles.fill}
                >
                <View style = {{flex:1, paddingTop: '2%'}}>
                    <CardContent text= {this.props.text} style = {styles.fill}/>
                </View>
                   
                </CardAction>
            </Card>
          </TouchableOpacity>

        </View>
            
    );

}
  
}

