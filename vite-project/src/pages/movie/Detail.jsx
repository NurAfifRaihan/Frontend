import { useParams } from "react-router-dom";
import DetailMovie from "../../components/Detailmovie/Index";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies"
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useContext } from "react";
import MoviesContext from "../../components/contex/MoviesContex";



function Detail(){
    const { id } = useParams();
    const {setMovies} = useContext(MoviesContext)
  // Create movies state

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
      <Movies />
    </>
  );

}

export default Detail;