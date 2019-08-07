import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_FILM_BY_ID,
  RESET_FILM_BY_ID,
} from './film.actions';

export const initialState = {
  isLoading: false,
  isError: false,
  films: [],
  filmPage: [],
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
        films: action.payload,
      };
    case GET_FILM_BY_ID:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        filmPage: action.payload,
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
