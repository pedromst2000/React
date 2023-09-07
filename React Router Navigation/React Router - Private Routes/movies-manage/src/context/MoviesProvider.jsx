import React, {createContext, useEffect, useState} from 'react'
import moviesData from '../data/movies.json';

const MoviesContext = createContext({});

export function MoviesProvider({children}) {
  
   const [movies, setMovies] = useState(()=>{

        const storeMovies = localStorage.getItem("movies");
    
        return storeMovies ? JSON.parse(storeMovies) : moviesData
    
      })
    
      useEffect(() => {
    
        setMovies(movies)
    
        localStorage.setItem("movies", JSON.stringify(movies))
    
      }, [movies]);


      const filterMoviesByTitle = (title) => {

        if(title === "") return movies;

        return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
      };
      
      
    return (
    <MoviesContext.Provider value={{movies, filterMoviesByTitle}}>
        {children}
    </MoviesContext.Provider>
    )
}



export default MoviesContext;
