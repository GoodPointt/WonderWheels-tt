import axios from 'axios';
import { BASE_URL, LIMIT } from '../common/constants';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchAllCars = async page => {
  try {
    const { data } = await instance.get(`/adverts?limit=${LIMIT}&page=${page}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
