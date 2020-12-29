import React from 'react';
import {fetchMovies} from './api'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen'

import {StackNavigator} from './StackNavigator'

export default class App extends React.Component {
	

	render() {
    return (
      <StackNavigator/>
    );
  }
}

