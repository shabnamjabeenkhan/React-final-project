import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts';





const Movies = () => {
const [posts, setPosts] = useState([]);

       



useEffect (() => {
 axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c").then((data) => {
        setPosts(data.data)
        console.log(data)
       })
}, [])





     
        






        return ( 
      
        <>
        <div className="bg_color">
         <nav> 
         <div className="main--title">MOVIES</div>
         <ul className="nav__link--lists">
         <li>
         <Link to="/" className= "nav__link--anchor link__hover-effect link__hover-effect--white">Home</Link>
         </li>
         <li>
         <a href="" className="nav__link--anchor
         link__hover-effect
         link__hover-effect--white ">Find your movie</a>
         </li>
         <li>
         <a href="" className="nav__link--anchor
         nav__link-anchor-primary">
         <span className="contact__btn">Contact</span>
          </a>
         </li>
         </ul>
         </nav>
         <h1 className="browse">
         Browse Our Movies
         </h1>
         <label className="label" for="Search by keyword">
         <input className="input" type="text" placeholder="Search by Keyword" onChange="onSearchChange(event)"/>
         <img className="icon" src="Assets/search icon.png" alt=""/>
         </label>
         </div> 



                <div className="search__results">
                <h1>
                Search results:
                </h1>
                </div>
                

                

                <div className="row">
                <div className="user-list">
                <div className="user">
                <div className="user-card">
                <div className="user-card__container">
                <h3>Poster: <b>Poster</b> </h3>
                <p>Title: <b>Title</b> </p>
                <p>Type: <b>Type</b></p>
                <p>Year: <b>Year</b></p>
                </div>
                </div>
                </div>
                </div>
                </div>
               
               
                {
                    posts?.map((post) => {
                      return  <Posts title={post.title} type={post.type} year={post.year} />
                      
                    })
                }
                
            </>



    );
}

export default Movies;
