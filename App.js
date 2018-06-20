import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ImageBackground, WebView, Image, ScrollView, Linking} from 'react-native';
import RootStack from './components/RootStack.js'
import Icon from './components/icon.js'
import RF from "react-native-responsive-fontsize"
import {createStackNavigator} from 'react-navigation';
import Home from './components/home.js';
import styles from './components/styles.js';
import Wellness from './components/wellness.js';
import breathing from './components/breathing.js';
import askExpert from './components/AskExpert'
import OMA from './components/OMA.js';
import MSO from './components/MSO.js';
import CMHA from './components/CMHA.js';
import morneau from './components/morneau.js';



class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  // state = {
  //   fadeAnim2: new Animated.Value(1),  // Initial value for opacity: 0
  // }

  // componentDidMount() {
  //   Animated.timing(                  // Animate over time
  //     this.state.fadeAnim2,            // The animated value to drive
  //     {
  //       toValue: 0,                   // Animate to opacity: 1 (opaque)
  //       duration: 10000,              // Make it take a while
  //     }
  //   ).start();                        // Starts the animation
  // }


  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends React.Component{
  render(){
    return (
        <RootStack/>
      );

  }

}        
