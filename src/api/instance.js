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

export const fetchByMake = async (page, make) => {
  try {
    const { data } = await instance.get(
      `/adverts?make=${make}&limit=${LIMIT}&page=${page}`
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchByPrice = async (page, filter) => {
  try {
    const { data } = await instance.get(
      `/adverts?sortBy=rentalPrice&order=desc`
      // `/adverts?rentalPrice=${filter.rentalPrice}`
    );

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchByMileage = async (page, filter) => {
  try {
    const { data } = await instance.get(`/adverts?sortBy=mileage&order=asc`);

    return data;
  } catch (e) {
    console.error(e);
  }
};
