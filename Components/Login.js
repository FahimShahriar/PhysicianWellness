

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View, 
	TextInput
} from 'react-native';



export default class App extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<TextInput onChangeText={(text) => this.setState({text})} >
				
				</TextInput>
			</View>
		);
	}
}


});
