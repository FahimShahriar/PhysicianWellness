import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import styles from './styles.js'

export default class breathing extends Component {
  render(){
    return (
      <View style={styles.fill}>
        <ImageBackground
          style={styles.fill}
          source={require('../Pictures/breathing_exercise.gif')}
        />
      </View>
    )
  }
}