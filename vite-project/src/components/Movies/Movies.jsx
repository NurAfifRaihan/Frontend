import { useContext } from "react";
import Movie from "../Movie/movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";
import MoviesContext from "../contex/MoviesContex";

function Movies({ title = "Latest Movies" }) {
    const { movies } = useContext(MoviesContext);
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies_title}>{title}</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => (
                        <Movie key={movie.id || nanoid()} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Movies;
