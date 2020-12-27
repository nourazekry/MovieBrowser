import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
	state = {
		search:'',
		movies: [],
	}
	componentDidUpdate(prevState){
		if(this.state.search !== prevState.search){
			this.fetchResults()
		}
	}
	
	async fetchResults(){
		response = await fetch('http://www.omdbapi.com/?s='+this.state.search+'&apikey=a50c07e')
		print = await response.json()
		/**todo: parse through json*/
		console.log(print)
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
