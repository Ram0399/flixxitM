// axios.js

import axios from "axios";

// Create an instance of Axios with a custom configuration
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Base URL for TMDB API
});

export default instance;
