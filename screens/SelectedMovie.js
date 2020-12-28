import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class SelectedMovie extends React.Component{
	
	static navigationOptions = {
    headerTitle: 'SelectedMovie',
  };
	
	render() {
		 return (
			 <View style={styles.container}>
				 <Text style={styles.text}>HELLO</Text>
			 </View>
		 );
	 }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});
