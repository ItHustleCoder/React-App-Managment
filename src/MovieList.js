import React, {useState, useContext} from 'react';
import './App.css';
import Movie from './Movie';
import { MovieContext } from './MovieContexct'


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            {movies.map((movie) => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
   );
}

export default MovieList;