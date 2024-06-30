import { useContext, useEffect } from 'react';
import axios from 'axios';
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies";
import styled from "styled-components";
import ENDPOINTS from '../../utils/constants/endpoints';
import MoviesContext from '../../components/contex/MoviesContex';

const StyledH2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;

function PopularMovie() {
    const { setMovies } = useContext(MoviesContext);

    useEffect(function() {
        async function fetchPopularMovies() {
            const response = await axios.get(ENDPOINTS.POPULAR);
            setMovies(response.data.results);
        }
        fetchPopularMovies();
    }, [setMovies]);

    return (
        <>
            <Hero />
            <StyledH2>
                Popular Movie
            </StyledH2>
            <Movies title="Popular Movies"/>
        </>
    );
}

export default PopularMovie;
