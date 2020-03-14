import request from '../utils/request';

export default {
  fetch: () => {
    const url = 'https://ip-api.com/json/';
    return request(url)
  }
}