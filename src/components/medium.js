import React, { useState } from "react";

const Movie = (props) => {
    return (
        <div className="movie">
            <h2>{props.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title} width="403px" height="648px" />
        </div>
    );
};

const Medium = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const api_key = "9afb3f6495bd7301e701e09cc5096ee3";

    async function getMovies() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(search)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMovies(data.results);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search) {
            getMovies();
        }
    };

    return (
        <div className="container">
            <div className="search">
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            <div className="movies">
                {movies.map((movie) => (
                    <Movie key={movie.id} title={movie.title} poster={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default Medium;
