import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import styles from './styles.js'
import Icon from '../components/icon.js';
import AskExpert from './AskExpert';
import navigation from 'react-navigation'
import RootStack from './RootStack.js';


export default class MSO extends Component{
  render(){
    return (
      <ImageBackground 
        style = { styles.fill}
        source = { require('../Pictures/Backgrounds/MSO_screen.png' )}
        imageStyle = {{ resizeMode: 'stretch' }}
      >
        <View style = {styles.column}>
          <View style = {styles.rowTop}>
            <Icon 
              img = {require('../Pictures/Icons/Resources_icon.png')}
              title = 'Resources'
              click = {() => this.props.navigation.navigate('Resources')}>
            </Icon>
            <Icon 
              img = {require('../Pictures/Icons/contact_icon.png')}
              title = 'Contact'
              click = {() => this.props.navigation.navigate('Email')}>
            </Icon>
          </View>
          <View style = {styles.rowBottom}>
            <Icon 
              img = {require('../Pictures/Icons/orientation_icon.png')}
              title = 'Orientation'
              click = {() => this.props.navigation.navigate('orientation') }>
            </Icon>
            <Icon 
              img = {require('../Pictures/Icons/news_icon.png')}
              title = 'News'
              click = {() => this.props.navigation.navigate('News') }>
            </Icon>
          </View>
        </View>
      </ImageBackground>
    )
  }
}
