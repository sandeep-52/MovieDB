import React, { useEffect, useState } from 'react'
import { API_URL, APP_KEY, IMAGE_BASE_DOMAIN } from '../config/config';
import axios from 'axios'
import { useLocation } from "react-router-dom"




const SinglePageMovieDetails = () => {
    const [singlePageMovieDetails , setSinglePageMovieDetails] = useState([])
    let location = useLocation()
    const [movieId , setMovieId] = useState(0)
    
    useEffect(() =>{
        // setSinglePageMovieDetails(() => singlePageMovieDetails+movieId)
        getmovieID()
        setTimeout(() => {
            
            GetSinglePageMovieDetails()
        }, 1000);
    },[])

    const getmovieID = () =>{
        // debugger;
        let movie_id = location.state.movie_id 
         setMovieId(movie_id)
    }


    const GetSinglePageMovieDetails = async() => {
        // debugger;
        try{

            const response = await axios({
                
                url : `https://api.themoviedb.org/3/movie/${location.state.movie_id}`,
                params : {
                    api_key : APP_KEY,
                    languages : "en_Us",
                    page : 1
                }
            })
        //     const response = await axios({
        
        //     url :API_URL +`/${movie_id}`,
           
        //     params : {
        //         api_key : APP_KEY,
        //         languages : "en_Us",
        //         page : 1
        //     },
        // })
        if(response){
            setSinglePageMovieDetails(response.data)
        }
          } catch(err){
            console.log(err);
        }}
        
  return (
      <>
    <div className='image'>
      
            <div><img src={IMAGE_BASE_DOMAIN + singlePageMovieDetails.backdrop_path }  alt=" "/>
            <p>{singlePageMovieDetails.original_title}</p>
            <p>{singlePageMovieDetails.vote_average}</p>
            </div>
            
              
    </div>
    </>
  );
}

export default SinglePageMovieDetails