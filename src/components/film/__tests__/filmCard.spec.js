import React from 'react';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import FilmCard from '../filmCard';

describe('FilmCard', () => {
  let props = {
    film: {
      id: 1,
      title: 'title',
      vote_average: 10,
    },
  };

  const getWrapper = () => shallow(<FilmCard {...props} />);

  it('render card', () => {
    expect(getWrapper());
  });
});
