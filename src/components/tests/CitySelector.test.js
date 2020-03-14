import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import CitySelector from '../CitySelector';
import { act } from 'react-dom/test-utils';
import location from '../../services/location';
import weather from '../../services/weather'


describe.skip('CitySelector', () => {

  afterEach(() => {
    cleanup();
    jest.clearAllMocks()
  });
  beforeEach( () => {
    location.fetch = jest.fn( () => Promise.resolve( { city: 'La Plata'}));
    weather.fetchSelectedCity = jest.fn( () => Promise.resolve( {
       list: [
         { dt: new Date(),
          weather: [
             { icon: 'md10', main: 'Rain'  }
            ],
            temp : {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          { dt: new Date(),
            weather: [
               { icon: 'md10', main: 'Rain'  }
              ],
              temp : {
                min: '2',
                max: '10'
              },
              humidity: '10'
          },
          { dt: new Date(),
            weather: [
              { icon: 'md10', main: 'Rain'  }
            ],
            temp : {
              min: '2',
              max: '10'
            },
            humidity: '10'
          },
          { dt: new Date(),
            weather: [
                { icon: 'md10', main: 'Rain'  }
              ],
              temp : {
                min: '2',
                max: '10'
              },
              humidity: '10'
            },
            { dt: new Date(),
              weather: [
                  { icon: 'md10', main: 'Rain'  }
                ],
                temp : {
                  min: '2',
                  max: '10'
                },
                humidity: '10'
              },
        ]
       }));
    window.alert = jest.fn();
  } )


  it('should matches snapshot', () => {
    const { asFragment } = render(<CitySelector />)
    expect(asFragment()).toMatchSnapshot();
  })

  it('should render the correct content when is loading', async () => {
    location.fetch = jest.fn( () => Promise.resolve( {}));

   let getByTestId
    await act( async() => {
      ( { getByTestId } = await render(<CitySelector />))
    });
    expect(getByTestId('loading')).toBeTruthy();
  })

  it('should render the correct content after fetch location successfully', async () => {

   let getByText
   await act( async() => {
      ( { getByText } = await render(<CitySelector />))
    });
     expect(getByText("La Plata")).toBeInTheDocument();
  })

  it('should render the correct content after fetch location and fails', async () => {
    location.fetch = jest.fn( () => Promise.reject());

    await act( async() => {
       await render(<CitySelector />);
     });
      expect(window.alert).toHaveBeenCalled();
   })

  it('should call the correct action when a city is selected', async () => {

    let getByTestId
    let getByText
    await act( async() => {
       ( { getByTestId, getByText } = await render(<CitySelector />))
     });

     const select = getByTestId('city-select')
     const submitButton = getByText('Check weather');

     await act( async() => {
        await fireEvent.change(select, { target: { value: "London" }});
        await fireEvent.click(submitButton)
    });

     expect(weather.fetchSelectedCity).toHaveBeenCalledWith('London');

   })

})