import _ from 'lodash';
import { SEARCH_MOVIES, SEARCH_MOVIES_FAILURE } from './search.actions';
import { POSTER_URL } from '../../../utils';

export const initialState = {
  searchResult: [],
  name: '',
};

export const searchFetchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        searchResult: _.map(action.payload, film => ({
          ...film,
          posterCustom: POSTER_URL + film.poster_path,
        })),
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        searchResult: initialState.searchResult,
      };
    default:
      throw new Error();
  }
};
