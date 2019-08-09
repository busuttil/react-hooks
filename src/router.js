import React from 'react';
import Films from './components/film/films';
import FilmPage from './components/film/filmPage';
import Search from './components/search/search';

const routes = {
  '/': () => <Films />,
  '/film/:id': ({ id }) => <FilmPage filmId={id} />,
  '/search': () => <Search />,
};

export default routes;
