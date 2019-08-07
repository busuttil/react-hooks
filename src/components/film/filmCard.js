import React from 'react';
import { POSTER_URL } from '../../utils';
import { A } from 'hookrouter';

import './card.css';

const FilmCard = ({ film }) => (
  <A href={`/film/${film.id}`} className="card">
    <h1>
      Title: {film.title} <br />
      <span>Note: {film.vote_average}</span>
    </h1>
    <img src={`${POSTER_URL}${film.poster_path}`} alt={film.poster_path} />
    <p>Synopsis: {film.overview}</p>
  </A>
);

export default FilmCard;
