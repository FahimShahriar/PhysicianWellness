import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'



export default class Wellness extends Component {
  render() {
    return (
      <ImageBackground 
        style = { styles.fill }
        source = { require('../Pictures/Backgrounds/wellness_screen.png' )}
        imageStyle = {styles.background}
      >
        <View style = {styles.column}>
          <View style={styles.rowTop}>
            <Icon 
                img = {require('../Pictures/breathing_exercise.gif')}
                title = 'Breathing'
                click = {() => this.props.navigation.navigate('Breathing') }>
            </Icon>
            <Icon 
                img = {require('../Pictures/Icons/documents_icon.png')}
                title = 'Time Tracking'
                click = {() => this.props.navigation.navigate('TimeTracking') }>
            </Icon>
          </View>
          <View style={styles.rowBottom}>
            <Icon 
                img = {require('../Pictures/Icons/documents_icon.png')}
                title = 'Pomodoro'
                click = {() => this.props.navigation.navigate('Pomodoro') }>
            </Icon>
            <Icon 
                img = {require('../Pictures/Icons/documents_icon.png')}
                title = 'Time Tracking'
                click = {() => this.props.navigation.navigate('breathing') }>
            </Icon>
          </View>
        </View>
      </ImageBackground>
    );
  }
}