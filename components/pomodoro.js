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
  render() {
    return (
      <ImageBackground 
      style = { styles.fill }
      source = { require('../Pictures/Backgrounds/pomodoro_screen.png' )}
      imageStyle = {styles.background}
    >
      <View style = {styles.column}>
      <View style = {styles.rowTop}>
        <CountDown
        onPress={() => alert('hello')}
        until = {1500}
        until2 = {300}
        size = {35}
        style = {styles.fill}
      />
      </View>
      <View style = {styles.description}>
      <Text style = {styles.descriptionText}>
      The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. 
      The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, 
      separated by short breaks. The technique has been widely popularized by dozens of apps and websites 
      providing timers and instructions. Closely related to concepts such as timeboxing and iterative and 
      incremental development used in software design, the method has been adopted in pair programming 
      contexts.

      </Text>
      </View>
 
    </View>
 
      </ImageBackground>
    )
  }
}
