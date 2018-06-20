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
        source = { require('../Pictures/Backgrounds/CMHA_screen.png' )}
        imageStyle = {styles.background}
      >
        <View style = {styles.column}>
          <View style = {styles.rowTop}>
            <Icon 
              img = {require('../Pictures/Icons/phone_icon.png')}
              title = 'Call'
              click = {() => linkValid('telprompt:18888112222')}>
            </Icon>
            <Icon 
              img = {require('../Pictures/Icons/redirect_icon.png')}
              title = 'Website'
              click = {() => linkValid('http://cmhapeeldufferin.ca/programs-services/24-7-crisis-support-peel/')}>
            </Icon>
          </View>
          <View style={styles.description} >
            <Text style= {styles.descriptionText}>
                24.7 Crisis Support Peel is a community crisis service offering timely response to adults (16 years
                and over) experiencing a mental health or additions crisis; individuals having difficulties coping,
                and family, caregivers and friends needing support. Professionals will speak to you by phone to 
                provide support and help you make a plan to stay save. A team of health professionals may also 
                visit you where you are to provide support. 24.7 Crisis Support Peel is not an emergency response 
                unit. If your situation is a life-threatening emergency, call 911. 
            </Text>
          </View>
        </View>
      </ImageBackground>

    )
  }
}