import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', async () => {

  const {  getByText } = render(<App />)
  const linkElement = getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
