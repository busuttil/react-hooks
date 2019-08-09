const API_KEY = '3a8cd8d7d1bea747e8120e855239b8fb';
export const API_URL = 'https://api.themoviedb.org/3';
export const BASE_URL = `${API_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
export const FILM_ID_URL = filmId => `${API_URL}/movie/${filmId}?api_key=${API_KEY}`;
export const SEARCH_URL = name =>
  `${API_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&&query=${name}&page=1&include_adult=false`;

export const POSTER_URL = 'https://image.tmdb.org/t/p/original';
