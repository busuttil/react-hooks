import _ from 'lodash';
import React, { useReducer, useState, Fragment } from 'react';
import { searchMovies } from './store/search.actions';
import { searchFetchReducer, initialState } from './store/search.reducer';

import FilmCard from '../film/filmCard';

const Search = () => {
  const [name, setName] = useState(initialState.name);
  const [state, dispatch] = useReducer(searchFetchReducer, initialState);

  const handleSubmit = event => {
    setName(event.target.value);
    if (name.length > 3) {
      searchMovies(dispatch, name);
    }
  };

  return (
    <Fragment>
      <label>
        Movie Name:
        <input type="text" onChange={handleSubmit} value={name} />
      </label>
      <input type="submit" value="Submit" />
      <div className="page">
        {!_.isEmpty(state.searchResult)
          ? _.map(state.searchResult, film => <FilmCard film={film} key={film.id} />)
          : null}
      </div>
    </Fragment>
  );
};

export default Search;
