import Axios from './axios';
import React, { useEffect, useState } from 'react'
import './Rows.css';
function Rows({title,fetchURL,isLargeRow = false}){
    const [movies, setMovies] = useState([]);
    const base_url= "http://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request = await Axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
        
    },[fetchURL]);

    
  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className='row_posters'>
      {movies.map(movie=>(
        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        key = {movie.id}
         src={`${base_url}${
            isLargeRow ? movie.poster_path: movie.backdrop_path
        }`} alt={movie.name}/>

        ))
        
      )}
      </div>
      
    </div>
  )
}

export default Rows
