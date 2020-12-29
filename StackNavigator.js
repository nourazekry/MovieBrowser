import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import HomeScreen from './screens/HomeScreen'
import SelectedMovie from './screens/SelectedMovie'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Selected" component={SelectedMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
					<HomeScreen navigation = {navigation}/>
					
  );
};

const Selected = ({ navigation }) => {
  return (
					<SelectedMovie navigation = {navigation}/>
					
  );
};



export {StackNavigator}
