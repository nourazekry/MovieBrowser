import React from 'react';
import {fetchMovies} from './api'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import SearchNavigator from './SearchNavigator'

export default class App extends React.Component {
	

	render() {
    return (
      <SearchNavigator/>
    );
  }
}

