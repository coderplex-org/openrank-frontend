import axios from 'axios';
import store from './store';

export default () => axios.create({
  baseURL: store.state.baseUrl,
  timeout: 10000,
});
