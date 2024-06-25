import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies"
import styled from "styled-components";
import ENDPOINTS from "../../utils/constants/endpoints";

const StyledH2 = styled.h2`
margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;
function NowPlayingMovie(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Memanggil function getNowPlaying
        getNowPlaying();
    });

    // Membuat fungsi getNowPlaying: mengambil movies populer.
    async function getNowPlaying() {
        const response = await axios.get(ENDPOINTS.NOWPLAYING);
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