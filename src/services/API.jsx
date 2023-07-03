import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = "82d7358e08c3385257d89a8036361557";

const popular = async () => {
    const response = await axios
        .get('/trending/movie/week', {
            params: {
                api_key: API_KEY,
                language: 'uk',
            },
        });
    return response.data.results;
};

const search = async (query) => {
    const response = await axios
        .get('/search/movie', {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });
    return response.data.results;
};

const details = async (id) => {
    const response = await axios
        .get('/movie/' + id, {
            params: {
                api_key: API_KEY,
                language: 'uk',
            },
        });
    return response.data;
};

const cast = async (id) => {
    const response = await axios
        .get('/movie/' + id + '/credits', {
            params: {
                api_key: API_KEY,
            },
        });
    return response.data.cast;
};

const reviews = async (id) => {
    const response = await axios
        .get('/movie/' + id + '/reviews', {
            params: {
                api_key: API_KEY,
            },
        });
    return response.data.results;
};

const API = {
  popular,
  search,
  details,
  cast,
  reviews,
};

export default API;
