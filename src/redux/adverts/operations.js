import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllCars,
  fetchByMake,
  fetchByMileage,
  fetchByPrice,
} from '../../api/instance';
import { checkFavorites } from '../../utils/checkFavorites';

export const getAll = createAsyncThunk(
  'adverts/getAll',
  async (variant, thunkAPI) => {
    try {
      const {
        adverts: { favorites, page },
      } = thunkAPI.getState();

      const data = await fetchAllCars(page, variant);

      const dataWithFavs = checkFavorites(data, favorites, variant);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getByMake = createAsyncThunk(
  'adverts/getByMake',
  async (make, thunkAPI) => {
    try {
      const {
        adverts: { favorites, page },
      } = thunkAPI.getState();

      const data = await fetchByMake(page, make);

      const dataWithFavs = checkFavorites(data, favorites);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getByPrice = createAsyncThunk(
  'adverts/getByPrice',
  async (filter, thunkAPI) => {
    try {
      const {
        adverts: { favorites, page },
      } = thunkAPI.getState();

      const data = await fetchByPrice(page, filter);

      const filteredData = data.filter(
        advert => advert.rentalPrice <= Number(filter.rentalPrice)
      );

      const dataWithFavs = checkFavorites(filteredData, favorites);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getByMileage = createAsyncThunk(
  'adverts/getByMileage',
  async (filter, thunkAPI) => {
    try {
      const {
        adverts: { favorites, page },
      } = thunkAPI.getState();

      const data = await fetchByMileage(page, filter);
      const filteredData = data.filter(
        advert =>
          advert.mileage >= Number(filter.minMileage) &&
          advert.mileage <= Number(filter.maxMileage)
      );

      const dataWithFavs = checkFavorites(filteredData, favorites);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
