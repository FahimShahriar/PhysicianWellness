import RF from "react-native-responsive-fontsize"
import {createStackNavigator} from 'react-navigation';
import Home from '../components/home.js';
import Wellness from '../components/wellness.js';
import Breathing from '../components/breathing.js';
import {OMA, Morneau, CMHA, AskExpert} from '../components/AskExpert'

import MSO from '../components/MSO.js'

import Documents from '../components/documents.js';
import Resources from '../components/Resources.js'
import Email from '../components/email.js'
import TimeTracking from './timeTracking.js'
import Pomodoro from './pomodoro.js'
import {BoxBreathing, Progressive} from './breathing.js'


let RootStack = createStackNavigator(
  {
     Home: {
      screen: Home,
      navigationOptions: () => ({
        headerBackTitle: 'Home',
        }),
      },
      Wellness:{
        screen: Wellness,
        navigationOptions: () => ({
          title: `Wellness Tools`,
          headerBackTitle: 'Wellness',
          }),
        
      },
      AskExpert:{
        screen: AskExpert,
        navigationOptions: () => ({
          title: `Ask an Expert`,
          headerBackTitle: 'Expert',
          }),
        
      },
      MSO:{
        screen: MSO,
        navigationOptions: () => ({
          title: `MSO`,

          headerBackTitle: 'MSO',
        }),
      },
      OMA:{
        screen: OMA,
        navigationOptions: () => ({
          title: `OMA`,
          headerBackTitle: 'OMA',
          }),
      },
      CMHA: {
        screen: CMHA,
        navigationOptions: () => ({
          title: `CMHA`,
          headerBackTitle: 'CMHA',
        }),
      },
      morneau: {
        screen: Morneau,
        navigationOptions: () => ({
          title: `Morneau Shepell`,
          headerBackTitle: 'MS',
          }),
      },
      Documents:{    
        screen: Documents,
   
      },
      Email:{
        screen: Email
      },
      TimeTracking:{
        screen: TimeTracking,
        navigationOptions: () => ({
          title: 'Time Tracking',
          headerBackTitle: 'Tracking'
        })
      },
      Resources:{
        screen: Resources, 
        navigationOptions: () => ({
          title: 'Resources',
          headerBackTitle: 'Resources'
          }),
      },
      Breathing:{
        screen: Breathing,
        navigationOptions: () => ({
          title: 'Breathing'
          }),
      },
      Pomodoro:{
        screen: Pomodoro,
        navigationOptions: () => ({
          title: 'Pomodoro'
          }),
      },
      BoxBreathing:{
        screen: BoxBreathing,
        navigationOptions: () => ({
          title: 'Box Breathing'
          }),
      },
      Progressive:{
        screen: Progressive,
        navigationOptions: () => ({
          title: 'Progressive Relaxation'
          }),
      }
      

      

  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;





  

