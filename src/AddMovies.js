import React, {useState, useContext} from 'react';
import './AddMovies.css';
import { MovieContext } from './MovieContexct';


 const AddMovies = () => {

    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
        
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
        console.log(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name : name , price : price}]);
        setName('');
        setPrice('')
    }


     return (
        <form className="search-form"
              onSubmit={addMovie}
        >
            <input type="text"
                   className="input-form"
                   name="name"
                   value={name}
                   placeholder="Write your movies name here.."
                   onChange={updateName}
            />
            <input type="text"
                   className="input-form"
                   name="price"
                   value={price}
                   onChange={updatePrice}
                   placeholder="Write price of movies here.."
            />
            <button className="btn-submit">Submit</button>
        </form>
     );
 }

 export default AddMovies;