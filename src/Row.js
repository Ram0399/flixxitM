import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  // State to store the fetched movies
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch movie data from the specified URL
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    // Call the fetchData function when the component mounts or fetchUrl changes
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
