import StyledMovie from "./movie.styled";


function Movie(props){

    const { movie } = props; 
    return(
        <StyledMovie>
            <div>
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>                    
            </div>
        </StyledMovie>
    );
}

export default Movie 