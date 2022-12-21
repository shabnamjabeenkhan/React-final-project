import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Posts from '../components/Posts';





const Movies = () => {
const [posts, setPosts] = useState({});
const { id } = useParams()
const [searchId, setSearchId] = useState(id)






       function onSearch() {
        fetchPosts(searchId)
       }
       async function fetchPosts(userId) {
        const {data} =  await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${userId || id}`)
        setPosts(data)
        console.log(data)
       
       }






        useEffect(() => {
        fetchPosts()
        }, [])






        return  (
      
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
         {/* <label  onClick={() => onSearch()} name='search' className="label" htmlFor='search'>
         <input className="input" type="text" value={searchId || ''} onChange={(event) => setSearchId(event.target.value) } placeholder="Search by Keyword"/>
         <img className="icon" src="Assets/search icon.png" alt=""/>
         </label> */}
                  <label  onClick={() => onSearch()} name='search' className="label" htmlFor='search'>
         <input onClick={() => onSearch()} onKeyUp={(e) => {console.log(e); if (e.code === "Enter") {setSearchId(e.target.value)}}} className="input" type="text" value={searchId || ''} onChange={(event) => setSearchId(event.target.value) } placeholder="Search by Keyword"/>
         <img className="icon" src="Assets/search icon.png" alt=""/>
         </label>
         </div> 



                <div className="search__results">
                <h1>
                Search results:
                </h1>
                </div>
          {
            posts.Search?.map((post, index) => {
              return  (
                <div className='container'>
                <div class="row">
                <div class="user-list">
                  <div class="user">
                    <div class="user-card">
                      <div class="user-card__container">
                      <img src={post.Poster} alt={`Poster for ${post.Title}`} />
                          <p>Title: <b>{post.Title}</b> </p>
                          <p>Type: <b>{post.Type}</b></p>
                          <p>Year: <b>{post.Year}</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>



              //   <div key={index} className="user">
              // <div className="user-card">
              // <div className="user-card__container"> 
              // <img src={post.Poster} alt={`Poster for ${post.Title}`} />
              // <p>Title: <b>{post.Title}</b> </p>
              // <p>Type: <b>{post.Type}</b></p>
              // <p>Year: <b>{post.Year}</b></p>
              // </div>
              // </div>
              // </div>
         

              )
            })
          }
     
   </>



    );
}

export default Movies;
