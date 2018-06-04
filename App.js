import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return (
        <RootStack/>
      );

  }

} 

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
        <ImageBackground 
          source={require('/Users/prabhdeep/hello/AwesomeProject/osler_logo.jpg')} 
          style = {{flex:1,width:'100%',height:'100%', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity 
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('WellnessTools')}>
            <Image source={require('/Users/prabhdeep/hello/AwesomeProject/ask_expert_icon.jpg')}
            style={{width: 100, height: 100}} />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('WellnessTools')}>
            <Image source={require('/Users/prabhdeep/hello/AwesomeProject/Picture1.png')}
            style={{width: 100, height: 100}} />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('WellnessTools')}>
            <Image source={require('/Users/prabhdeep/hello/AwesomeProject/Picture1.png')}
            style={{width: 100, height: 100}} />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('WellnessTools')}>
            <Image source={require('/Users/prabhdeep/hello/AwesomeProject/Picture1.png')}
            style={{width: 100, height: 100}} />
          </TouchableOpacity>
        </ImageBackground>
        </View>
    );
  }
}



class MenuOption extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        style = {styles.text}
      </View>
    );
  }
}


class WellnessTools extends MenuOption {
  render() {
    return (
      <View>
       <MenuOption name=' ' />
      </View>
    );
  }
}


class Wellness extends MenuOption {
  render() {
    return (
      <View>
       <MenuOption name='Wellness' />
      </View>
    );
  }
}


let RootStack = createStackNavigator(
  {
     Home: {
      screen: HomeScreen,
      },
      WellnessTools:{
        screen: WellnessTools
      },
      Wellness:{
        screen: Wellness
      }
  },
  {
    initialRouteName: 'Home',
  }
);






  

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    left:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 100,
  }
});
