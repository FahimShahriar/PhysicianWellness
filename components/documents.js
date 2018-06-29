import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ImageBackground, WebView, Image, ScrollView,} from 'react-native';

export default class Documents extends Component{
    
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('title', 'NO-TITLE'),
        };
      };
   render(){
     
    const { navigation } = this.props;
     const src = navigation.getParam('src', 'NO-SRC');
     return (
      <View style={{ flex: 1 }}>
      <WebView
          bounces={false}
          scalesPageToFit={true}
          scrollEnabled = {true}
          source={{uri: src}} 
          style = {{flex:1}}/>
         
         
      </View>
     )
   }

}

