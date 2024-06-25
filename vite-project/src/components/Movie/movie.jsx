import {Link} from "react-router-dom";
import StyledMovie from "./movie.styled";


function Movie(props){

    const { movie } = props; 
    const year = movie.year || movie.release_date;
    return(
        <StyledMovie>
            <div>
                <img src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <Link to={`/movie/${movie.id}`}><h3>{movie.title}</h3></Link>
                
                <p>{year}</p>                    
            </div>
        </StyledMovie>
    );
}

export default Movie 