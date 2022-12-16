import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (    <>
               <div className="bg_color">
                <nav> 
                <div className="main--title">MOVIES</div>
                <ul className="nav__link--lists">
                <li>
                <Link to="/" className= "nav__link--anchor link__hover-effect link__hover-effect--white">Home</Link>
                </li>
                <li>
                <Link to="movies" className="nav__link--anchor
                link__hover-effect
                link__hover-effect--white ">Find your movie</Link>
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
                <input className="input" type="text" placeholder="Search by Keyword"/>
                <img className="icon" src="Assets/search icon.png" alt=""/>
                </label>
                </div> 
                </>
            
  )
}
