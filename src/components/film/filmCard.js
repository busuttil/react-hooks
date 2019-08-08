import React from 'react';
import { A } from 'hookrouter';

import './card.scss';

const FilmCard = ({ film }) => (
  <A href={`/film/${film.id}`} className="card">
    <h1>
      Title: {film.title} <br />
      <span>Note: {film.vote_average}</span>
    </h1>
    <img src={film.posterCustom} alt={film.posterCustom} />
    <p>Synopsis: {film.overview}</p>
  </A>
);

export default FilmCard;
