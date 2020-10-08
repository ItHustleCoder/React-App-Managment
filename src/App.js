import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieContexct';
import AddMovies from './AddMovies';
import './App.css';

function App() {
  
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovies/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
