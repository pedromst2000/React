import React from 'react'
import data from '../../data/movies.json'
import MovieItem from '../../components/MovieItem'

export default function Movies() {
 
 const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {

    setMovies(data);

    // Clean up function
    return () => {
      setMovies([]);
    }

  }, [movies]);

 
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          Cover={movie.Cover}
          year={movie.Year}
          genre={movie.Genre}
        />
      ))}
    </div>
  )
}
