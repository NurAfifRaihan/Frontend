import { useParams } from "react-router-dom";
import DetailMovie from "../../components/Detailmovie/Index";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import axios from "axios";
import styled from "styled-components";
import ENDPOINTS from "../../utils/constants/endpoints";

const StyledH2 = styled.h2`
margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;

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
      <StyledH2>
      <h2>Recomendations</h2>
      </StyledH2>
      <Movies movies={movies} />
    </>
  );

}

export default Detail;