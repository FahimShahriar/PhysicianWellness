import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return <RootStack />;

  }

} 

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
         <TouchableOpacity 
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('WellnessTools')}>
            <Image source={require('/Users/prabhdeep/hello/AwesomeProject/Picture1.png')}
              style={{width: 100, height: 100}} />
          </TouchableOpacity>
          <Button
            title="Wellness"
            onPress={() => this.props.navigation.navigate('Wellness')}
          />
          <Button
            title="Wellness Tools"
            onPress={() => this.props.navigation.navigate('WellnessTools')}
          />
          <Button
            title="Wellness"
            onPress={() => this.props.navigation.navigate('Profile')}
          />
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
    padding: 10,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
  }
});
