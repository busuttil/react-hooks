import _ from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';

import FilmCard from './filmCard';
import { filmFetchReducer, initialState } from './store/film.reducer';
import { fetchFilms } from './store/film.actions';

const Films = () => {
  const [state, dispatch] = useReducer(filmFetchReducer, initialState);
  const [didCancel, setdidCancel] = useState(false);
  useEffect(() => {
    fetchFilms(dispatch, didCancel);
    setdidCancel(true);
  }, [didCancel]);

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
};

export default Films;
