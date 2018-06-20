import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import styles from './styles.js'
import Icon from './icon.js'

export default class AskExpert extends Component {
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
