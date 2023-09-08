import React, { useContext } from 'react';
import MoviesContext from '../context/MoviesProvider.jsx';

export default function useMoviesProvider() {
  return useContext(MoviesContext);
}