import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  row: {
		padding: 20,
		borderWidth: 2,
		borderColor: 'black',
	},
})


export default class Row extends React.Component{
	render(){
		return(
  <View style={styles.row}>
				<TouchableOpacity onPress = {() => {
			console.log('newScreen')
				//this.props.navigation.goBack();
						
					}}>
					 <Text>{this.props.title}</Text>
					 <Text>{this.props.year}</Text>
				</TouchableOpacity>
  			</View>
					 );
	}
}

