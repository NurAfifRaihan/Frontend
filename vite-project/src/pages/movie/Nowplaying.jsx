import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies"
import styled from "styled-components";

const StyledH2 = styled.h2`
margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;
function NowPlayingMovie(){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Memanggil function getNowPlaying
        getNowPlaying();
    });

    // Membuat fungsi getNowPlaying: mengambil movies populer.
    async function getNowPlaying() {
        const response = await axios.get(URL);
        setMovies(response.data.results);
    }
    return(
        <>
           
            <Hero />
            <StyledH2>
            <h2>Now Playing</h2>
            </StyledH2>
            <Movies movies={movies} />
        </>

    )
}

export default NowPlayingMovie