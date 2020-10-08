import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    
    const [movies, setMovies] = useState([
        {
            name : 'Harry Potter',
            price: '10$',
            id: 2200
        },
        {
            name: 'Game of Trons',
            price : '25$',
            id: 2202
    
        },
        {
            name: 'Drark',
            price: '35$',
            id: 2203
    
        }
    ]);    
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}