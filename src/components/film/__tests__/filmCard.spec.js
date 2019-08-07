import React from 'react';
import { mount } from 'enzyme';

import FilmCard from '../filmCard';

describe('FilmCard', () => {
  let props;
  beforeEach(() => {
    props = { film: {}};
  });

  const getWrapper = () => mount(<FilmCard {...props} />);

  it('render card', () => {
    props.film = {id: 1, title: "aaa"};
    expect(getWrapper().find('h1')).toHaveLength(1);
  });
});
