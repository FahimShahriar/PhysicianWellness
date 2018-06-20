import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'
import linkValid from './linkValid.js'
import RF from "react-native-responsive-fontsize"



export default class CMHA extends Component{
  render(){
    return (
      <ImageBackground 
        style = { styles.fill}
        source = { require('../Pictures/Backgrounds/OMA_screen.png' )}
        imageStyle = {styles.background}
      >
        <View style = {styles.column}>
          <View style = {styles.rowTop}>
            <Icon 
              img = {require('../Pictures/Icons/phone_icon.png')}
              title = 'Call'
              click = {() => linkValid('telprompt:18008516606')}>
            </Icon>
            <Icon 
              img = {require('../Pictures/Icons/redirect_icon.png')}
              title = 'Website'
              click = {() => linkValid('http://php.oma.org/')}>
            </Icon>
          </View>
          <View style={styles.description} >
            <Text style= {styles.descriptionText}>
                The Physician Health Program (PHP) provides confidential support for individuals who are struggling with substance use 
                and mental health concerns, as well as with other behaviours that have a personal and professional impact. The PHP also 
                offers support and education to physician leaders, hospitals, and other worksites; as well as to anyone else who is 
                concerned about a loved one or colleague. The services are aimed at supporting a culture of medicine that values 
                prevention, early identification and intervention of health concerns, that supports both the health professional, 
                their loved ones, and the workplace. 
            </Text>
          </View>
        </View>
      </ImageBackground>

    )
  }
}

