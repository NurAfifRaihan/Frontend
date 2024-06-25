import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies"
import styled from "styled-components";
import ENDPOINTS from '../../utils/constants/endpoints';


const StyledH2 = styled.h2`
margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;
function PopularMovie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Memanggil function getPopularMovies
        getPopularMovies();
    });

    // Membuat fungsi getPopularMovies: mengambil movies populer.
    async function getPopularMovies() {
        const response = await axios.get(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }

    return (
        
        <>
            <Hero />
            <StyledH2>
            <h2>Popular Movie</h2>
            </StyledH2>
            <Movies movies={movies} />
        </>
       
    );
}

export default PopularMovie;
