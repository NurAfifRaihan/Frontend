/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled.jsx";
import axios from 'axios';
import ENDPOINTS from "../../utils/constants/endpoints.js";


function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;


  useEffect(() => {
    // Move API KEY outside.
    async function fetchDetailMovie() {
      // Call trending movies and get movie id
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;

      const response = await axios(ENDPOINTS.HERO(id));

      // Update movie state using api response
      setMovie(response.data);
    }
    fetchDetailMovie();
    // Fetch trending movies code here.
    async function fetchTrendingMovies() {
  
      const response = await axios.get(ENDPOINTS.TRENDING);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }
  
    fetchTrendingMovies();
  });
    // Fetch detail movie.


  return (
    <StyledHero>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
            <Button variant="primary" full as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank">Watch Movie</Button>
          </div>
      
          <div className="hero__right">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="placeholder" />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
