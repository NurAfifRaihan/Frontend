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
function TopRated(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Memanggil function getTopRated
        getTopRated();
    });

    // Membuat fungsi getTopRated: mengambil movies populer.
    async function getTopRated() {
        const response = await axios.get(ENDPOINTS.TOPRATED);
        setMovies(response.data.results);
    }
    return(
        <>
           <Hero />
            <StyledH2>
            <h2>Top Rated</h2>
            </StyledH2>
            <Movies movies={movies} />
        </>
    )
}

export default TopRated;