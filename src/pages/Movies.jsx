import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { Skeleton } from "@mui/material";

const Movies = () => {
  const [posts, setPosts] = useState({});
  const { id } = useParams();
  const [searchId, setSearchId] = useState("");
  const[loading, setLoading] = useState(true)

  async function fetchPosts() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${searchId || id}`
    );
    console.log(searchId, id);
    setTimeout(() => {
    setLoading(false)
    }, 2000)
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
    <div className="container">

   
      <div className="bg_color">
      <div>
          <div className="nav">
            <ul className="nav__link--lists">
              <div className="main-title">MOVIES</div>
              <li> <Link to="/">
                <a  className="nav__link--anchor link__hover-effect link__hover-effect--white" href="">Home</a>
                </Link>
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

        <div>
          <label
            onClick={fetchPosts}
            name="search"
            className="label"
            htmlFor="search"
          >
            <input
              className="input"
              type="text"
              onChange={(event) => setSearchId(event.target.value)}
              placeholder="Search by Keyword"
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  fetchPosts();
                }
              }}
            />
            <button className="srch-btn" onClick={fetchPosts}>
              {" "}
              <SearchIcon className="srch" />{" "}
            </button>
          </label>
        </div>
      </div>

      <div className="search__results">
        <h1>Search results:</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="user-list">
            <div className="main-section">
            <div className="user">
              {posts.Search?.map((post, index) => {
                return (
                  
                  <div className="user-card">
                       {
              loading ? (
                <Skeleton height={"300px"}/>
              ) : (
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
              )
            }
                 
                  </div>
                );
              })}
            </div>
            </div>
          
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Movies;
