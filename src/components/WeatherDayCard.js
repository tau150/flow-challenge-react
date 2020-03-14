import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-basis: 25%;
  border: 1px solid #eaeaea;
  margin: 50px 30px 0 30px;
  border-radius: 10px;

  h4{
    margin-top: 0;
  }

  p {
    font-size: 0.9rem;
  }
`

const LoadingCard = styled.div`
  flex-basis: 25%;
  border: 1px solid #eaeaea;
  margin: 50px 30px 0 30px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;

  .image {
    width: 90px;
    height: 90px;
    background: #eaeaea;
    margin: 20px;
    border-radius: 50%;
  }

  .mainTitle{
    width: 70px;
    height: 20px;
    background: #eaeaea;
  }

  .desc{
    width: 100px;
    height: 20px;
    background: #eaeaea;
    margin-top: 30px;
  }

  .data{
    width: 120px;
    height: 15px;
    background: #eaeaea;
    margin-top: 30px;
  }
`

const WeatherDay = ({weather, isFetching}) => {

  const { date, description, icon, min, max, humidity } = weather;

  if(isFetching) return <WeatherDay.Loading />
  return (
    <Card>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
      <h5 data-testid='date-title' >{date.getDate()} - {date.getMonth() + 1}</h5>
      <h4>{description}</h4>
      <p>Min: {min} °C</p>
      <p>Max: {max} °C</p>
      <p>Humidity: {humidity}%</p>
    </Card>
  )

}

WeatherDay.Loading = () => {
  return (
    <LoadingCard data-testid="loading-skeleton">
      <div className="image"></div>
      <div className="mainTitle"></div>
      <div className="desc"></div>
      <div className="data"></div>
      <div className="data"></div>
      <div className="data"></div>
    </LoadingCard>

  )

}

export default WeatherDay;