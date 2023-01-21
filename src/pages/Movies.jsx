import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Posts from "../components/Posts";
import SearchIcon from "@mui/icons-material/Search";

const Movies = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState({});
  const { id } = useParams();
  const [searchId, setSearchId] = useState(id);

  function onSearch() {
    fetchPosts(searchId);
  }

  async function fetchPosts(userId) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${userId || id}`
    );
    setPosts(data);
    console.log(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="bg_color">
        <nav>
          <div className="main--title">MOVIES</div>
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
              <a
                href=""
                className="nav__link--anchor
         link__hover-effect
         link__hover-effect--white "
              >
                Find your movie
              </a>
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
 <label
          onClick={() => onSearch()}
          name="search"
          className="label"
          htmlFor="search"
        >
          <input
            className="input"
            type="text"
            value={searchId || ""}
            onChange={(event) => setSearchId(event.target.value)}
            placeholder="Search by Keyword"
            onKeyDown={(e) => {
              console.log(e);
              if (e.code === "Enter") {
                setSearchId(e.target.value);
              }
            }}
          />
          <button className="srch-btn" onClick={onSearch}>
            {" "}
            <SearchIcon className="srch" />{" "}
          </button>
        </label>
 </form>
      </div>

      <div className="search__results">
        <h1>Search results:</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="user-list">
            <div className="user">
              {posts.Search?.map((post, index) => {
                return (
                  <div className="user-card">
                    <div className="user-card__container">
                      <img
                        className="imgs"
                        src={post.Poster}
                        alt={`Poster for ${post.Poster}`}
                      />
                      <p>
                        Title: <b>{post.Title}</b>
                      </p>
                      <p>
                        Type: <b>{post.Type}</b>
                      </p>
                      <p>
                        Year: <b>{post.Year}</b>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
