import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";


function DetailMovie() {
    const params = useParams();
    const {id} = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  
    useEffect(() => {
      getDetailMovie();
    }, [id]);
    async function getDetailMovie() {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
  
      setMovie(response.data);
    }
  
    console.log(movie);


return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer}>Watch</Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
