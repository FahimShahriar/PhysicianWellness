import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
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
         <Button
            title="Wellness Tools"
            onPress={() => this.props.navigation.navigate({this.props.title}!)
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
      <View style={styles.button1}>
       <Text>Hello {this.props.name}!</Text>
        <Button
          onPress={doNothing}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

class WellnessTools extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
       <MenuOption name='WellnessTools' />
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
      }
  },
  {
    initialRouteName: 'Home',
  }
);





let doNothing = function (){
  
}

const styles = StyleSheet.create({
  button1: {
    position: 'absolute',
    bottom: 0,
    left:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
