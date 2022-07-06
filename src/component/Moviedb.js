import React, { useEffect, useState } from 'react'

import { API_URL, APP_KEY , IMAGE_BASE_DOMAIN } from "../config/config";
import axios from "axios"
import { Link } from "react-router-dom"


const Moviedb = () => {

    const [popularMovies , setPopularMovies] = useState([])

    useEffect(()=>{
        getPopularMovies()
    }, [])


    const getPopularMovies = async() =>{
        try {
            const response = await axios({
                url : API_URL + "/popular",
                params : {
                    api_key : APP_KEY,
                    languages :"en-US",
                    page : 1

                },

            })
            
            if(response){
                setPopularMovies(response.data.results)
          
            }
        } catch (err) {
            console.log(err);
        }
    }


  



  return (
      <>
    
<div className='image'>
{popularMovies.map((data)=>{
    return  <Link to= "/movieDetails" 
        state ={ {
            movie_id : data.id
        
    }}> <div  ><img src={IMAGE_BASE_DOMAIN + data.backdrop_path } alt="" />
<p>{data.original_title}</p>
<p>{data.vote_average}</p></div></Link>
})}

</div>

  


    






    



    
    </>
  );
}

export default Moviedb;