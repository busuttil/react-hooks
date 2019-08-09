import { SEARCH_URL } from '../../../utils';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const searchMovies = async (dispatch, name) => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const result = await fetch(SEARCH_URL(name), settings);
    if (result.ok) {
      const response = await result.json();
      dispatch({ type: SEARCH_MOVIES, payload: response.results });
    }
  } catch (error) {
    dispatch({ type: SEARCH_MOVIES_FAILURE });
  }
};
