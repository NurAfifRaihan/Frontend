/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

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
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>
          <p className={styles.hero__description}>{movie.Plot}</p>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={movie.Poster} alt={movie.Title} />
        </div>
      </section>
    </div>
  );
}

export default Hero;
