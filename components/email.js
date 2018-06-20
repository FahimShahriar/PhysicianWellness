import email from 'react-native-email'
import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Picker} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from './styles.js'
import { Dropdown } from 'react-native-material-dropdown';
import RF from "react-native-responsive-fontsize";

export default class Email extends Component {
    render() {


        let data = [{
            value: 'Banana',
          }, {
            value: 'Mango',
          }, {
            value: 'Pear',
          }];
       
      return (
        <View style = {{flex:1, padding: '3%'}}>



        <Dropdown
          label='Send an email to: '
          data={data}
          dropdownPosition = {0}
          labelFontSize = {RF(2)}
          fontSize = {RF(2)}
      />
        <FormLabel style = {styles.fill}>Name</FormLabel>
            <FormInput/>

        
            </View>
      )
    }
}




