import request from '../utils/request';

export default {
  fetchSelectedCity: city => {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&&appid=${process.env.REACT_APP_ACCESS_KEY}`;
    return request(url)
  }
}