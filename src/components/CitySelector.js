import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import location from '../services/location';
import weather from '../services/weather';
import Loading from './Loading';
import WeatherDayCard from './WeatherDayCard';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  select{
    width: 20%;
    font-size: 1rem;
  }
`


const CardsContainer = styled.div`
  display: flex;
  width: 100%;
`
const CitySelector = () => {

  const getCityWeather = (list) => {

    const firstDay =  {
      date: new Date(list[0].dt * 1000),
      icon: list[0].weather[0].icon,
      description: list[0].weather[0].main,
      min:  Math.floor(list[0].temp.min),
      max: Math.floor(list[0].temp.max),
      humidity: list[0].humidity
    }
    const secondDay =  {
      date: new Date(list[1].dt * 1000 ),
      icon: list[1].weather[0].icon,
      description: list[1].weather[0].main,
      min:  Math.floor(list[1].temp.min),
      max: Math.floor(list[1].temp.max),
      humidity: list[1].humidity
    }
    const thirdDay =  {
      date: new Date(list[2].dt * 1000),
      icon: list[2].weather[0].icon,
      description: list[2].weather[0].main,
      min:  Math.floor(list[2].temp.min),
      max: Math.floor(list[2].temp.max),
      humidity: list[2].humidity
    }
    const fourthDay =  {
      date: new Date(list[3].dt * 1000),
      icon: list[3].weather[0].icon,
      description: list[3].weather[0].main,
      min:  Math.floor(list[3].temp.min),
      max: Math.floor(list[3].temp.max),
      humidity: list[3].humidity
    }
    const fivethDay =  {
      date: new Date(list[4].dt * 1000),
      icon: list[4].weather[0].icon,
      description: list[4].weather[0].main,
      min:  Math.floor(list[4].temp.min),
      max: Math.floor(list[4].temp.max),
      humidity: list[4].humidity
    }

    return [firstDay, secondDay, thirdDay, fourthDay, fivethDay ]
  }

  const [ currentCity, setCurrentCity ] = useState(null)
  const [ selectedCityWeather, setSelectCityWeather ] = useState(null)
  const [ selectedCity, setSelectedCity ] = useState('')
  const [ isFetching, setIsFetching ] = useState(false);

  useEffect( () => {
    const fetchLocation = async() => {
      try {
        const { city } = await location.fetch();
        const { list } = await weather.fetchSelectedCity(city)
        const cityWeather = getCityWeather(list)

        setCurrentCity(city);
        setSelectCityWeather(cityWeather)
        setSelectedCity(city)

      }catch(e){
        alert('there was an error');
      }
    }
     fetchLocation();
  },[])

  const handleClickCheckWeather = async () => {
    setIsFetching(true)
    const { list } = await weather.fetchSelectedCity(selectedCity)
    const cityWeather = getCityWeather(list)
    setIsFetching(false)
    setSelectCityWeather(cityWeather)
  }
  const renderWeatherCards = () => {
    return selectedCityWeather.map( day => {
      return <WeatherDayCard isFetching={isFetching} weather={day} />
    })
  }

  if( !currentCity || !selectedCityWeather ) return <Loading />
  return (
    <Container>
      <h4>Please, select a city</h4>
      <select onChange={(e) => setSelectedCity(e.target.value)}>
        <option value={currentCity}>{currentCity}</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        <option value="Milan">Milan</option>
        <option value="Istambul">Istambul</option>
        <option value="Bangkok">Bangkok</option>
      </select>
      <Button disabled={isFetching} handleOnClick={handleClickCheckWeather} title="Check weather" />
      <CardsContainer>
        { renderWeatherCards() }
      </CardsContainer>
    </Container>
  )
}

export default CitySelector;