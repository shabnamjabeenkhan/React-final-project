import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {

async function getMovies(id) {
    const {data} = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${id}`)
}



    return (
        <div>
            movies
        </div>
    );
}

export default Movies;
