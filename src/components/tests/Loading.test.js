import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from '../Loading';


describe('Loading', () => {

  afterEach(cleanup);

  it('should matches snapshot', () => {
    const { asFragment } = render(<Loading />)
    expect(asFragment()).toMatchSnapshot();
  })

})