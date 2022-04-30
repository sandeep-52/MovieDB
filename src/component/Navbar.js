import React from 'react'
import "../assets/css/navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='card navbar-container'>
<h1>Moviedb</h1>
<div className='navbar'>

<ul>
<Link to="/">

    <li>Popular</li>
</Link>
<Link to="/topRatedMovies">

<li>Top Rated</li>
</Link>
<Link to="/upComingMovies" >

<li>Upcoming</li>
</Link>

</ul>
<div>
<input className='card2' type="text" placeholder='Movie Name'/>
<button className='card1'>Search</button>
</div>

</div>
</div>
  )
}

export default Navbar