import React, { useEffect, useState } from 'react'
import './Banner.css';
import Axios from "./axios";
import requests from './Requests';

const Banner = () => {
    const [movie,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await Axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    },[])

    console.log(movie);


    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1) + "....":string;
    }
  return (
    <header className="banner" style={{
        backgroundImage:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
        opacity:0.8

        }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">WishList</button>
            </div>
            <h1 className="banner__discription">{truncate(movie?.overview,150)}</h1>
        </div>
        <div className="banner--fadeButton"/>

       

      
    </header>
  )
}

export default Banner
