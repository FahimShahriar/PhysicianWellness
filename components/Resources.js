import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking, ScrollView, WebView, Picker} from 'react-native';
import styles from './styles.js'
import Icon from '../components/icon.js';
import AskExpert from './AskExpert';
import navigation from 'react-navigation'
import RootStack from './RootStack.js';
import RectIcon from './RectIcon.js';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class Resources extends Component{
  render(){
    return (
      <ScrollView>
      <View style = {styles.fill}
      >
        <View style = {{flexDirection: 'column', flex: 1, justifyContent: 'space-evenly',}}>
          <RectIcon
            title = 'How to Apply for Privileges'
            text = 'this is text'
            click = {() => this.props.navigation.navigate(
              'Documents', 
              {src: 'http://www.africau.edu/images/default/sample.pdf' }
            )}
          >
          </RectIcon>
          <RectIcon
            title = 'How to Change my Status'
            text = 'this is text'
            click = {() => {this.props.navigation.navigate('Email')}}
          >
          </RectIcon>
          <RectIcon
            title = 'Physician Opportunities'
            text = 'this is text'
          >
          </RectIcon>
          <RectIcon
            title = 'Information About Absences'
            text = 'this is text'
          >
          </RectIcon>
          <RectIcon
            title = 'Need help?'
            text = 'this is text'
          >
          </RectIcon>
          <RectIcon
            title = 'Physician Directory'
            text = 'Use the Physician Directory to access information about all credentialed William Osler physicians.'
            click = {() => {this.props.navigation.navigate(
              'Documents', {
                src: 'http://www.williamoslerhs.ca/health-care-professionals/programs-services/physician-and-service-directory',
                title: 'Physician Directory'
              }
            )}}
          />
          <RectIcon
            title = 'Physician Directory Guide'
            text = 'Need help using the Physician Directory? Read the Physician Directory Guide!'
            click = {() => {this.props.navigation.navigate(
              'Documents', {
                src: 'http://www.williamoslerhs.ca/docs/default-source/about-osler-documents/directory-resource-guide.pdf?sfvrsn=2',
                title: 'Directory Guide'
              }
            )}}
          />
          <RectIcon
            title = 'PMC Referral Toolkit'
            text = 'Use the Referral Toolkit to support timely patient referrals to Osler’s outpatient services at Peel Memorial.'
            click = {() => {this.props.navigation.navigate(
              'Documents', {
                src: 'http://www.williamoslerhs.ca/docs/default-source/about-osler-documents/peel-referral-toolkit.pdf?sfvrsn=4',
                title: 'Directory Guide'
              }
            )}}
          />


          https://gph.is/2lBWXiZ
       
          <RectIcon
            title = 'Further Education'
            text = 'this is text'
          >
          </RectIcon>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const navigator1 = () => {
  <WebView
              bounces={false}
              scrollEnabled={false} 
              source={{ uri: 'http://www.africau.edu/images/default/sample.pdf' }} />
  
}