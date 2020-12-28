import React from 'react'
import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ScrollViewMovies = props => (
  <ScrollView>
    {props.movies.map(movie => <Row {...movie} />)}
  </ScrollView>
)

ScrollViewMovies.propTypes = {
  movies: PropTypes.array,
}

export default ScrollViewMovies
