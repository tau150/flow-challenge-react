import request from '../utils/request';

export default {
  fetch: () => {
    const url = 'http://ip-api.com/json/';
    return request(url)
  }
}