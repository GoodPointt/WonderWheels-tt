import axios from 'axios';
import { BASE_URL, LIMIT, VARIANT } from '../common/constants';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchAllCars = async (page, variant = VARIANT.ALL) => {
  try {
    if (variant === VARIANT.ALL) {
      const { data } = await instance.get(
        `/adverts?limit=${LIMIT}&page=${page}`
      );
      return data;
    } else {
      const { data } = await instance.get(`/adverts`);
      return data;
    }
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
