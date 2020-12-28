import React from 'react';
import {fetchMovies} from './api'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ScrollViewMovies from './ScrollViewMovies'
import Constants from 'expo-constants'

export default class App extends React.Component {
	state = {
		search:'',
		movies: [],
	}
	componentDidUpdate(prevState){
		if(this.state.search !== prevState.search){
			fetchMovies(this.state.search).then(results => this.setState({movies: results}))
		}
	}

  getHandler = key => val => {
    this.setState({ [key]: val });
  };
	
	render() {
    return (
      <View style={styles.container}>
						<TextInput
						value = {this.state.search}
						onChangeText = {this.getHandler('search')}
						style = {styles.input}/>
						
						<ScrollViewMovies movies={this.state.movies}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
