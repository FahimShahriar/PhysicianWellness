import RF from "react-native-responsive-fontsize"
import {createStackNavigator} from 'react-navigation';
import Home from '../components/home.js';
import Wellness from '../components/wellness.js';
import Breathing from '../components/breathing.js';
import AskExpert from '../components/AskExpert'
import OMA from '../components/OMA.js';
import MSO from '../components/MSO.js';
import CMHA from '../components/CMHA.js';
import morneau from '../components/morneau.js';
import Documents from '../components/documents.js';
import FAQ from '../components/FAQ.js'
import Email from '../components/email.js'
import TimeTracking from './timeTracking.js'
import Pomodoro from './pomodoro.js'


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
        screen: morneau,
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
      FAQ:{
        screen: FAQ, 
        navigationOptions: () => ({
          title: 'FAQ'
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
      }

      

  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;





  

