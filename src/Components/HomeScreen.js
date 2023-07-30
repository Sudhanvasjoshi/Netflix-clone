import React from 'react'
import './HomeScreen.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Rows from './Rows';
import requests from './Requests';
const HomeScreen = () => {
  return (
    <div className="homeScreen">
        {/* Nav */}
        <Navbar/>
        {/* Banner */}
        <Banner/>
        {/* Row */}
        <Rows title = "Netflix Originals" 
        fetchURL = {requests.fetchNetflixOriginals}
        isLargeRow/>
         <Rows title = "Trending Now" fetchURL = {requests.fetchTrending}/>
         <Rows title = "Top Rated" fetchURL = {requests.fetchTopRated}/>
         <Rows title = "Action Movies" fetchURL = {requests.fetchActionMovies}/>
         <Rows title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies}/>
         <Rows title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
         <Rows title = "Romantic Movies" fetchURL = {requests.fetchRomanceMovies}/>
         <Rows title = "Documentaries" fetchURL = {requests.fetchDocumentaries}/>

             
    </div>
  )
}

export default HomeScreen
