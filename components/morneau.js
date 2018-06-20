
import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'

import linkValid from './linkValid'


export default class CMHA extends Component{
  render(){
    return (
      <ImageBackground 
        style = { styles.fill}
        source = { require('../Pictures/Backgrounds/Morneau_screen.png' )}
        imageStyle = {styles.background}
      >
        <View style = {styles.column}>
          <View style = {styles.rowTop}>
            <Icon 
              img = {require('../Pictures/Icons/phone_icon.png')}
              title = 'Call'
              click = {() => linkValid('telprompt:18448809142')}>
            </Icon>
            <Icon 
              img = {require('../Pictures/Icons/redirect_icon.png')}
              title = 'Website'
              click = {() => linkValid('https://www.workhealthlife.com/')}>
            </Icon>
          </View>
          <View style={styles.description} >
            <Text style= {styles.descriptionText}>
            Your Employee and Family Assistance Program provides you and your family members with immediate confidential help for any
            work, health or life concerns. You can access you EFAP 24/7 by phone, web or mobile app. You are offered support to find
            solutions in the following areas: achieving well-being, relationships and family, deal with workplace challenges, tackle
            additions, find child and elder care resources, get legal advice, receive financial guidance, improve nutrition, and 
            physical health. 
            </Text>
          </View>
        </View>
      </ImageBackground>

    )
  }
}

