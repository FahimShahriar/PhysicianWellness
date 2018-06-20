import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import styles from './styles.js'

import AskExpert from './AskExpert';
import RootStack from './RootStack.js';
import MSO from './MSO.js';
import {navigation} from 'react-navigation'

export default class Icon extends Component{
  render(){
    return(
      <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <TouchableOpacity 
          style = { styles.button }
          onPress= {this.props.click}>
            <Image 
              defaultSource={this.props.img}
              style={styles.icon} 
            />
        </TouchableOpacity>    
        <Text 
          style = { styles.iconText }>
          {this.props.title}
        </Text>
      </View>
            
    );

}
  
}



