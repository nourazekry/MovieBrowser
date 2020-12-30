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
						 <View style = {styles.container}>
						 <View style = {styles.imageContainer}>

						 <Text style ={styles.title}> {this.state.movie.Title}</Text>
						 <Image style = {styles.image} source = {{uri: this.state.movie.Poster}}/>
							 </View>
	 <View style={styles.container}>
						 <Text style = {styles.text}></Text>
						 <Text style = {styles.text}></Text>
						 <Text style = {styles.text}></Text>
						 <Text style = {styles.text}></Text>
			 </View>
		 </View>
						 );
	 }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  title: {
		flex: 1,
    textAlign: "center",
		backgroundColor: 'lightblue',
	flexDirection: 'row'
  },
	imageContainer:{
		flex: 3,
		backgroundColor: 'blue',
	flexDirection: 'row'
	},
image: {
	flex:1,
width: null,
height: null,
resizeMode: 'contain',
},
	text: {
		flex: 1,
    textAlign: "center",
		backgroundColor: 'lightblue'
  },
});
