import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies";
import styled from "styled-components";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../components/contex/MoviesContex";

const StyledH2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;

function NowPlayingMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const response = await axios.get(ENDPOINTS.NOWPLAYING);
      setMovies(response.data.results);
    }
    fetchNowPlayingMovies();
  }, [setMovies]);

  return (
    <>
      <Hero />
      <StyledH2>Now Playing</StyledH2>
      <Movies title="Now Playing Movies" />
    </>
  );
}

export default NowPlayingMovie;
