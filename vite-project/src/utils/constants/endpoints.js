const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

const ENDPOINTS = {
    POPULAR : `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    NOWPLAYING : `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOPRATED : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    DETAIL : (id) => `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`,
    HERO : (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    TRENDING : `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
}
export default ENDPOINTS;