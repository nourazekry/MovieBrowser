import React from 'react'
import { StyleSheet, Text, View, TextInput,Image, ScrollView} from 'react-native';
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
						 <ScrollView style = {styles.container}>
						 		<Text style = {{flex:1, backgroundColor: 'blue'}}>
						 		</Text>
								 <Image style = {{flex:3}}>
								</Image>
						 		<Text style = {{flex:2, backgroundColor: 'blue'}}>
						 		</Text>
						 		<Text style = {{flex:1, backgroundColor: 'blue'}}>
						 		</Text>
						 		
						 </ScrollView>
						/* <ScrollView style = {styles.container}>
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
		 </ScrollView>*/
						 );
	 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
	//backgroundColor: 'red',
  },
  title: {
	
		height: 59,
		top: 33,
	backgroundColor:'lightblue',
		textAlign: 'center',


  },
	imageContainer:{
		//position: absolute,
		width: 375,
		height: 371,
		
		top: 90,
		justifyContent: 'center'
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
