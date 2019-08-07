import React from 'react';
import { mount } from 'enzyme';

import { Films } from '../films';
import { filmFetchReducer } from '../store/film.reducer';
import { FETCH_INIT, FETCH_SUCCESS } from '../store/film.actions';
const mockedData = [{ id: 1, title: 'aa' }, { id: 2, title: 'bb' }];

describe('Films', () => {
  const state = {
    isLoading: false,
    isError: false,
    films: [],
    filmPage: [],
  };

  it('renders', () => {
    mount(<Films />);
  });

  it('should set isLoading', () => {
    const newState = filmFetchReducer(state, {
      type: FETCH_INIT,
      isLoading: true,
    });

    expect(newState).toEqual({ ...state, isLoading: true });
  });

  it('should set films', () => {
    global.fetch = jest.fn(async () => {
      const resp = await { type: FETCH_SUCCESS, films: mockedData };

      expect(resp).toEqual({ ...state, films: mockedData });
    });
  });
});
