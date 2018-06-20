import email from 'react-native-email'
import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Picker} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from './styles.js'
import { Dropdown } from 'react-native-material-dropdown';

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
        <View style = {styles.fill}>



        <Dropdown
        label='Favorite Fruit'
        data={data}
        dropdownPosition = {0}
      />
        {/*<FormLabel>Name</FormLabel>
            <FormInput/>

        <Picker
            selectedValue={'java'}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            </Picker>*/}
            </View>
      )
    }
}




