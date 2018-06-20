import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Linking, ScrollView, Picker} from 'react-native';
import styles from './styles.js'
import Icon from '../components/icon.js';
import AskExpert from './AskExpert';
import navigation from 'react-navigation'
import RootStack from './RootStack.js';
import RectIcon from './RectIcon.js';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class timeTracking extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head','Head2'],
      tableData: [
        ['1', '2'],
        ['a', 'b'],
        ['1', '2'],
        ['a', 'b']
      ]
    }
}
