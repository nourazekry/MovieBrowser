import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  row: {
		padding: 20,
		borderWidth: 2,
		borderColor: 'black',
	},
})



const Row = props => (
  <View style={styles.row}>
			<TouchableOpacity onPress = {() => console.log('new screen')}>
				<Text>{props.title}</Text>
				<Text>{props.year}</Text>
			</TouchableOpacity>
  </View>
)

export default Row
