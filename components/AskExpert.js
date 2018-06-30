import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'
import linkValid from './linkValid.js'

export class AskExpert extends Component {
  render() {
    return (
      <ImageBackground 
        style = { styles.fill}
        source = { require('../Pictures/Backgrounds/askExpert_screen.png' )}
        imageStyle = {styles.background }
      >
        <View style = {styles.column}>
          <View style = {styles.rowTop}>
            <Icon 
                img = {require('../Pictures/Icons/OMA_icon.png')}
                title = 'OMA'
                click = {() => this.props.navigation.navigate('OMA') }>
            </Icon>
            <Icon 
                img =  {require('../Pictures/Icons/CMHA_icon.png')}
                title = 'CMHA'
                click = {() => this.props.navigation.navigate('CMHA') }>
            </Icon>
          </View>

          <View style={styles.rowBottom}>
            <Icon 
                img =  {require('../Pictures/Icons/morneau_icon.png')}
                title = 'Morneau'
                click = {() => this.props.navigation.navigate('morneau') }>
            </Icon>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export class OMA extends Component{
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
              click = {() => this.props.navigation.navigate(
                'Documents', 
                {src: 'http://php.oma.org/', title: 'OMA'},
              )}>
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

export class Morneau extends Component{
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
              click = {() => this.props.navigation.navigate(
                'Documents', 
                {src: 'https://www.workhealthlife.com/', title: 'Morneau Shepell'},
              )}>
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

export class CMHA extends Component{
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
              click = {() => this.props.navigation.navigate(
                'Documents', 
                {src: 'http://cmhapeeldufferin.ca/programs-services/24-7-crisis-support-peel/', title: 'CMHA'},
              )}>
              
           
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