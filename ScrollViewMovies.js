import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

const Row = props => (
<View style={styles.row}>
				<TouchableOpacity onPress={() =>
	props.navigation.navigate('Selected', {imdbID: props.imdbID})
															}>
				 <Text>{props.title}</Text>
				 <Text>{props.year}</Text>
					<Text>{props.imdbID}</Text>

				</TouchableOpacity>
			</View>
												 );
const ScrollViewMovies = props => (
  <ScrollView>
			{props.movies.map(movie => <Row {...movie} navigation = {props.navigation}/>)}
  </ScrollView>
)

ScrollViewMovies.propTypes = {
  movies: PropTypes.array,
}
	const styles = StyleSheet.create({
		row: {
			padding: 20,
			borderWidth: 2,
			borderColor: 'black',
		},
	})

export default ScrollViewMovies
