import React from 'react';
import './App.css';
import Moviedb from './component/Moviedb';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import TopRatedMovies from './component/TopRatedMovies';
import UpcomingMovies from './component/UpcomingMovies';
import Navbar from './component/Navbar';
import SinglePageMovieDetails from './component/SinglePageMovieDetails';


function App() {
  return (

    <>
   
    <BrowserRouter>
    <div  className='app'>
    <Navbar />

    <Routes>
      <Route path="/"  element={<Moviedb />} />
      <Route path="/topRatedMovies" element={<TopRatedMovies />} />
      <Route path="/upComingMovies" element={<UpcomingMovies />} />
      <Route path="/movieDetails" element={<SinglePageMovieDetails />} />
    </Routes>
  </div>

  </BrowserRouter>,
  </>
   
  );
}

export default App;
