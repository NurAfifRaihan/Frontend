/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled.jsx";

function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    // Melakukan fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
            <h2>{movie.Title}</h2>
            <h3>Genre: {movie.Genre}</h3>
            <p>{movie.Plot}</p>
            <Button variant="primary" full>Watch Movie</Button>
          </div>
      
          <div className="hero__right">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
