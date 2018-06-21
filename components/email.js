import email from 'react-native-email'
import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Picker, Button} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from './styles.js'
import { Dropdown } from 'react-native-material-dropdown';
import RF from "react-native-responsive-fontsize";

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {data: ''};
  }

  handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Show how to use',
        body: 'Some body right here'
    }).catch(console.error)
}
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
          style = {{flex:1}}
      />
       <FormLabel style = {styles.fill}>Name</FormLabel>
            <FormInput/>
            <FormLabel style = {{flex:1, flexWrap: 'wrap'}}>Email content</FormLabel>
            <FormInput multiline containerStyle = {{flex:1, flexWrap: 'wrap', padding: '5%'}} inputStyle = {{flex:1, flexWrap: 
            'wrap', padding: '30%'}} onChangeText={(text) => this.setState({text})} >
            </FormInput>
          
        <Text style = {styles.fill}>
              {this.state.text}
            </Text>
        <Button style = {{flex:1,}} title = 'submit' onPress = {this.handleEmail}>
              {this.state.text}
        </Button>
        </View>
      )
    }
}




    
