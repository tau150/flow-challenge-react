import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WeatherDayCard from '../WeatherDayCard';


describe('WeatherDayCard', () => {

  afterEach(cleanup);
  const defaultProps = {
    weather : {
      date: new Date(1584196968749 * 1000),
      description: 'some',
      icon: '10n',
      min: '2',
      max: '10',
      humidity: '30'
    },
    isFetching: false
  }

  it('should matches snapshot', () => {
    const { asFragment } = render(<WeatherDayCard {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot();
  })

  it('should render with correct content', () => {
    const { getByText, getByRole, getByTestId } = render(<WeatherDayCard {...defaultProps} />)
    const dateTitle = getByTestId('date-title');

    expect(getByRole('img')).toBeTruthy();
    expect(dateTitle).toBeTruthy();
    expect(dateTitle.textContent).toBe(`${defaultProps.weather.date.getDate()} - ${defaultProps.weather.date.getMonth() + 1}`);
    expect(getByTestId('date-title')).toBeTruthy();
    expect(getByText('some')).toBeTruthy();
    expect(getByText('Min: 2 °C')).toBeTruthy();
    expect(getByText('Max: 10 °C')).toBeTruthy();
    expect(getByText('Humidity: 30%')).toBeTruthy();
  })


  it('should render the correct content when is fetching', () => {
    const { getByTestId } = render(<WeatherDayCard {...defaultProps} isFetching={true}/>)
    expect(getByTestId('loading-skeleton')).toBeTruthy()
  })

})