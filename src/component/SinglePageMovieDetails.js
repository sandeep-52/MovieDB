import React, { useEffect, useState } from 'react'
import { API_URL, APP_KEY, IMAGE_BASE_DOMAIN } from '../config/config';
import axios from 'axios'
import { useLocation } from "react-router-dom"

const SinglePageMovieDetails = () => {
    const [singlePageMovieDetails , setSinglePageMovieDetails] = useState([])
    let location = useLocation()
    let movie_id = location.state.movie_id


    useEffect(() =>{
        getSinglePageMovieDetails()
    },[])


    const getSinglePageMovieDetails = async() => {
        debugger;
        try{
            const response = await axios({
            url :API_URL +`/${movie_id}`,
           
            params : {
                api_key : APP_KEY,
                languages : "en_Us",
                page : 1
            },
        })
        if(response){
            setSinglePageMovieDetails(response.data.results)
        }
          } catch(err){
            console.log(err);
        }}
  return (
      <>
    <div className='image'>
        {singlePageMovieDetails.map((data) =>{
            return<div><img src={IMAGE_BASE_DOMAIN + data.backdrop_path} alt=""/>
            <p>{data.original_title}</p>
            <p>{data.vote_average}</p></div>
          
        })}
    </div>
    </>
  );
}

export default SinglePageMovieDetails