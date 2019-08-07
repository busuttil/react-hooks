import React, { useEffect, useReducer } from 'react';
import { A } from 'hookrouter';

import { filmFetchReducer, initialState } from './store/film.reducer';
import { getFilmById } from './store/film.actions';
import { POSTER_URL } from '../../utils';

export const FilmPage = ({ filmId }) => {
  const [state, dispatch] = useReducer(filmFetchReducer, initialState);
  useEffect(() => {
    let didCancel = false;
    if (!state.filmPage.title) {
      getFilmById(dispatch, didCancel, filmId);
    }
    return () => (didCancel = true);
  });

  return (
    <div className="page page--single">
      <A href="/">Back to home</A>
      <h1>Title: {state.filmPage.title}</h1>
      <img
        src={`${POSTER_URL}${state.filmPage.poster_path}`}
        alt={state.filmPage.poster_path}
        className="page__poster"
      />
      <p>Synopsis: {state.filmPage.overview}</p>
    </div>
  );
};

export default FilmPage;
