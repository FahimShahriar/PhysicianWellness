import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'



export default class Home extends Component {
  render() {
    return (
   
        <ImageBackground 
          style = { styles.fill }
          source = { require('../Pictures/Backgrounds/home_screen.png')}
          imageStyle = {styles.background}
        >
          <View style = {styles.column}>
            <View style = {styles.rowTop}>
              <Icon 
                img = {require('../Pictures/Icons/wellness_icon.png')}
                title = 'Wellness'
                click = {() => this.props.navigation.navigate('Wellness') }>
              </Icon>
              <Icon 
                img = {require('../Pictures/Icons/MSO_icon.png')}
                title = 'MSO'
                click = {() => this.props.navigation.navigate('MSO') }>
              </Icon>
            </View>
            <View style={styles.rowBottom}>
              <Icon 
                img = {require('../Pictures/Icons/documents_icon.png')}
                title = 'Documents'
                click = {() => this.props.navigation.navigate('Documents', {src: 'http://www.africau.edu/images/default/sample.pdf'}) }>
              </Icon>
              <Icon 
                img = {require('../Pictures/Icons/askExpert_icon.png')}
                title = 'Ask an Expert'
                click = {() => this.props.navigation.navigate('AskExpert')}>
              </Icon>
            </View>
          </View>
        </ImageBackground>
  

   
    );
  }
}
