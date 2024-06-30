import { useParams } from "react-router-dom";
import DetailMovie from "../../components/Detailmovie/Index";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";



function Detail(){
    const { id } = useParams();
  // Create movies state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch recommendation movies
    async function getRecommendationMovies() {
      const URL = ENDPOINTS.DETAIL(id);
      const response = await axios.get(URL);
      // Update movies state
      setMovies(response.data.results);
    }

    getRecommendationMovies();
  }, [id]);

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} />
    </>
  );

}

export default Detail;