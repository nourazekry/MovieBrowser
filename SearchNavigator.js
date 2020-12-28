import React from 'react';
import {fetchMovies} from './api'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import SelectedMovie from './screens/SelectedMovie'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

const StackNavigator = createStackNavigator({
		Home: HomeScreen,
		Selected: SelectedMovie,
	},{
		initialRouteName: "Home"
	}
);

const SearchNavigator = createAppContainer(StackNavigator)

export default SearchNavigator
