import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../components/contex/MoviesContex";



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
      <Movies title="Now Playing Movies" />
    </>
  );
}

export default NowPlayingMovie;
