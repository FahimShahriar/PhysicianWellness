import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'

export default class breathing extends Component {
  render(){
    return (
      <ImageBackground 
        style = { styles.fill }
        source = { require('../Pictures/Backgrounds/breathing_screen.png' )}
        imageStyle = {styles.background}
      >
        <View style = {styles.column}>
          <View style = {styles.rowTop}>
          <Icon 
            img = {require('../Pictures/breathing_exercise.gif')}
          title = 'Box Breathing'
            click = {() => this.props.navigation.navigate('BoxBreathing') }>
        </Icon>
        <Icon 
            img = {require('../Pictures/progressive_exercise.gif')}
          title = 'Progressive Relaxation'
            click = {() => this.props.navigation.navigate('Progressive') }>
        </Icon>
        </View>
        <View style = {styles.description}>
          <Text style= {styles.descriptionText}>
                Try one of these breathing exercises for relaxation. These relaxation techniques 
                can help a person to relax, to attain a state of increased calmness, or 
                otherwise reduce levels of pain, anxiety, stress or anger. Relaxation techniques
                are often employed as one element of a wider stress management program and can 
                decrease muscle tension, lower the blood pressure and slow heart and breath
                rates, among other health benefits.
          </Text>
        </View>
      </View>
    </ImageBackground>
    )
  }
}
export class BoxBreathing extends Component{
  render(){
    return(
      <View style={styles.fill1}>
      <ImageBackground
        style={styles.fill}
        source={require('../Pictures/breathing_exercise.gif')}
        imageStyle = {{flex: 1, resizeMode: 'contain'}}
      />
    </View>
    )
  }
}

export class Progressive extends Component{
  render(){
    return(
      <View style={styles.fill1}>
      <ImageBackground
        style={styles.fill}
        source={require('../Pictures/progressive_exercise.gif')}
        imageStyle = {{flex: 1, resizeMode: 'cover'}}
      />
    </View>
    )
  }
}
