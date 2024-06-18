import StyledMovie from "./movie.styled";


function Movie(props){

    const { movie } = props; 
    const year = movie.year || movie.release_date;
    return(
        <StyledMovie>
            <div>
                <img src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <h3>{movie.title}</h3>
                <p>{year}</p>                    
            </div>
        </StyledMovie>
    );
}

export default Movie 