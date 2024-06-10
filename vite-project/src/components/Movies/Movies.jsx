
import Movie from "../Movie/movie"
import Button from "../ui/Button";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid"; 

function Movies (props){

    const {movies, setMovies}= props; 
/**
 * fungsi untuk handle event click 
 * di jalankan  ketika button di klik
 */
function handleClick() {  
    const movie = {
        id: nanoid(), 
        title: "Jigsaw Spiral",
        year: 2021, 
        type: "Movie",
        poster: " https://picsum.photos/300/400",
    };
    /**
     * update state movies : set Movies
     * melakukan teknik spread untuk copy dan marge array
     */
    setMovies([...movies, movie]);
}

    return (
        
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Lates Movies</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) =>{
                        return <Movie key={movie.id} movie={movie}/>;
                    })}
                </div>
                <Button onClick={handleClick} variant="primary" full>Add Movie</Button>
            </section>
        </div>
    )
}

export default Movies;