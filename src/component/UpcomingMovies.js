import React, { useEffect, useState } from 'react';



import { API_URL, APP_KEY, IMAGE_BASE_DOMAIN } from '../config/config';
import axios from 'axios'

const UpComingMovie =()=> {
const[upcomingMovies , setUpComingMovie] =useState([])

useEffect(() =>{
  getUpComingMovie()
},[])
const getUpComingMovie = async() => {
  try{
      const response = await axios({
      url :API_URL + "/upcoming",
      params : {
          api_key : APP_KEY,
          languages : "en_Us",
          page : 1
      },
  })
  if(response){
    setUpComingMovie(response.data.results)
}
  } catch(err){
    console.log(err);
}}

  return (
    <>
    <div className='image'>
        {upcomingMovies.map((data) =>{
            return<div><img src={IMAGE_BASE_DOMAIN + data.backdrop_path} alt=""/>
            <p>{data.original_title}</p>
            <p>{data.vote_average}</p></div>
          
        })}
    </div>
    </>
  );
}

export default UpComingMovie;