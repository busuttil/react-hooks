import { API_KEY, BASE_URL } from '../../../utils';

export const FETCH_INIT = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const GET_FILM_BY_ID = 'GET_FILM_BY_ID';
export const RESET_FILM_BY_ID = 'RESET_FILM_BY_ID';

export const fetchFilms = async (dispatch, didCancel) => {
  dispatch({ type: FETCH_INIT });

  try {
    const result = await fetch(BASE_URL);
    const response = await result.json();
    if (!didCancel) {
      dispatch({ type: FETCH_SUCCESS, payload: response.results });
    }
  } catch (error) {
    if (!didCancel) {
      dispatch({ type: FETCH_FAILURE });
    }
  }
};

export const getFilmById = async (dispatch, didCancel, filmId) => {
  try {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`);
    const response = await result.json();
    if (didCancel) {
      dispatch({ type: RESET_FILM_BY_ID });
    } else {
      dispatch({ type: GET_FILM_BY_ID, payload: response });
    }
  } catch (error) {
    if (!didCancel) {
      dispatch({ type: FETCH_FAILURE });
    }
  }
};
