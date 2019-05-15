import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.8.42:3800/api'
});
