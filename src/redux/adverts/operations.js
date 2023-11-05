import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllCars,
  fetchByMake,
  fetchByMileage,
  fetchByPrice,
} from '../../api/instance';
import { checkFavorites } from '../../utils/checkFavorites';
import { VARIANT } from '../../common/constants';

export const getAll = createAsyncThunk(
  'adverts/getAll',
  async (variant = VARIANT.ALL, thunkAPI) => {
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
  async ({ filter, variant }, thunkAPI) => {
    try {
      const {
        adverts: { favorites, page },
      } = thunkAPI.getState();

      const data = await fetchByMake(page, filter);

      const dataWithFavs = checkFavorites(data, favorites, variant);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getByPrice = createAsyncThunk(
  'adverts/getByPrice',
  async ({ filter, variant }, thunkAPI) => {
    try {
      const {
        adverts: { favorites },
      } = thunkAPI.getState();

      const data = await fetchByPrice();

      const filteredData = data.filter(
        advert => advert.rentalPrice <= Number(filter.rentalPrice)
      );

      const dataWithFavs = checkFavorites(filteredData, favorites, variant);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getByMileage = createAsyncThunk(
  'adverts/getByMileage',
  async ({ variant, filter }, thunkAPI) => {
    try {
      const {
        adverts: { favorites },
      } = thunkAPI.getState();

      const data = await fetchByMileage();
      const filteredData = data.filter(
        advert =>
          advert.mileage >= Number(filter.mileage.minMileage) &&
          advert.mileage <= Number(filter.mileage.maxMileage)
      );

      const dataWithFavs = checkFavorites(filteredData, favorites, variant);

      return dataWithFavs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
