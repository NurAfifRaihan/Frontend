import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../components/contex/MoviesContex";



function TopRated() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const response = await axios.get(ENDPOINTS.TOPRATED);
      setMovies(response.data.results);
    }
    fetchTopRatedMovies();
  }, [setMovies]);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRated;
