import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

export default class Clickable extends React.Component{
	render(){
		return(
					 <View style={styles.row}>
				<TouchableOpacity onPress = {() => {
					this.props.navigation.navigate("Selected");
						
					}}>
				<Text>{props.title}</Text>
				<Text>{props.year}</Text>
			</TouchableOpacity>
  </View>
					 );
	}
}
