import _ from 'lodash';
import React, { useEffect, useReducer } from 'react';

import FilmCard from './filmCard';
import { filmFetchReducer, initialState } from './store/film.reducer';
import { fetchFilms } from './store/film.actions';

function Films() {
  const [state, dispatch] = useReducer(filmFetchReducer, initialState);
  useEffect(() => {
    let didCancel = false;
    fetchFilms(dispatch, didCancel);

    return () => (didCancel = true);
  }, []);

  return (
    <div className="page">
      {state.isError && <div>Something went wrong ...</div>}
      {state.isLoading ? (
        <div>Loading ...</div>
      ) : (
        _.map(state.films, film => <FilmCard film={film} key={film.id} />)
      )}
    </div>
  );
}

export default Films;
