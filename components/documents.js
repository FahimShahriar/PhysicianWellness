import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ImageBackground, WebView, Image, ScrollView,} from 'react-native';

export default class Documents extends Component{
   render(){
     return (
      <View style={{ flex: 1 }}>
      <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: 'http://www.africau.edu/images/default/sample.pdf' }} />
      </View>
     )
   }

}

