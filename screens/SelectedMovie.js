import React from 'react'
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {fetchMovie} from '../api'

export default class SelectedMovie extends React.Component{
	state = {
	movie: {},
	}

	componentDidMount(){
		fetchMovie(this.props.route.params.imdbID).then(result => this.setState({movie: result}))
	}
	
	 render() {
		 return (
			 <View style={styles.container}>
						 <Image style = {{flex:1}} source = {{uri: this.state.movie.Poster}}/>
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
