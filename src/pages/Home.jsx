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
      <div className="bg_color">
        <nav>
          <div className="main--title"> MOVIES</div>

          <ul className="nav__link--lists">
            <li>
              <Link
                to="/"
                className="nav__link--anchor link__hover-effect link__hover-effect--white"
              >
                Home
              </Link>
            </li>
            <li>
              {/* <Link
                to="movies"
                // {`/movies/${movieName}`}
                className="nav__link--anchor
                link__hover-effect
                link__hover-effect--white "
              >
                Find your movie
              </Link> */}
            </li>
            <li>
              <a
                href=""
                className="nav__link--anchor
                nav__link-anchor-primary"
              >
                <span className="contact__btn">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

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
    </>
  );
}
