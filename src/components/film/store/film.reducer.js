import _ from 'lodash';
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_FILM_BY_ID,
  RESET_FILM_BY_ID,
} from './film.actions';
import { POSTER_URL } from '../../../utils';

export const initialState = {
  isLoading: false,
  isError: false,
  films: [],
  filmPage: {},
};

export const filmFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        films: _.map(action.payload, film => ({
          ...film,
          posterCustom: POSTER_URL + film.poster_path,
        })),
      };
    case GET_FILM_BY_ID:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        filmPage: { ...action.payload, posterCustom: POSTER_URL + action.payload.poster_path },
      };
    case RESET_FILM_BY_ID:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        filmPage: initialState.filmPage,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: true,
      };
    default:
      throw new Error();
  }
};
