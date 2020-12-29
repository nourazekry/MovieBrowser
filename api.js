const processMovie = movie => ({
	title: movie.Title,
	year: movie.Year,
	imdbID: movie.imdbID,
})

const fetchMovies = async(search) => {
	const response = await fetch('http://www.omdbapi.com/?s='+search+'&apikey=a50c07e')
	const results = await response.json()
	
	return results.Search.map(processMovie)
}

const fetchMovie = async(search) => {
	const response = await fetch('http://www.omdbapi.com/?i='+search+'&apikey=a50c07e')
	const result = await response.json()

	return result.Title
}

export {fetchMovies, fetchMovie}
