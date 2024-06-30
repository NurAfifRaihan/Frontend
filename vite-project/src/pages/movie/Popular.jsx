import { useContext, useEffect } from 'react';
import axios from 'axios';
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from '../../utils/constants/endpoints';
import MoviesContext from '../../components/contex/MoviesContex';


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
            <Movies title="Popular Movies"/>
        </>
    );
}

export default PopularMovie;
