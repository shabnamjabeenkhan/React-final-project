import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();

  function onSearch() {
    navigate(`/movies/${movieName}`);
  }

  return (
    <>
    <div className="container">

   
      <div className="bg_color">
        <div>
          <div className="nav">
            <ul className="nav__link--lists">
              <div className="main-title">MOVIES</div>
              <li className="nav__link--anchor link__hover-effect link__hover-effect--white">
                <a  className="nav__link--anchor link__hover-effect link__hover-effect--white" href="">Home</a>
              </li>
              <li >
                <a className="nav__link--anchor
         link__hover-effect
         link__hover-effect--white " href="">Browse Our Movies</a>
              </li>
              <li>
                <a
                  className="nav__link--anchor
                nav__link-anchor-primary"
                  href=""
                >
                  <span className="contact-btn">Contact</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="browse">Browse Our Movies</h1>
        <form action="">
          <label className="label" htmlFor="search">
            <input
              onChange={(e) => setMovieName(e.target.value)}
              name="search"
              className="input"
              type="text"
              placeholder="Search by Keyword"
              onKeyDown={(e) => {
                console.log(e);
                if (e.code === "Enter") {
                  setMovieName(e.target.value);
                }
              }}
            />
            <button className="srch-btn" onClick={onSearch}>
              {" "}
              <SearchIcon />{" "}
            </button>
          </label>
        </form>
      </div>
      </div>
    </>
  );
}
