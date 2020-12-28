const processMovie = movie => ({
	title: movie.Title,
	year: movie.Year,
})

export const fetchMovies = async(search) => {
	const response = await fetch('http://www.omdbapi.com/?s='+search+'&apikey=a50c07e')
	const results = await response.json()
	
	return results.Search.map(processMovie)
}

