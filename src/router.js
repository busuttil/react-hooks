import React from 'react';
import Films from './components/film/films';
import FilmPage from './components/film/filmPage';
import Counter from './components/counter';

const routes = {
  '/': () => <Films />,
  '/film/:id': ({ id }) => <FilmPage filmId={id} />,
  '/counter': () => <Counter />,
};

export default routes;
