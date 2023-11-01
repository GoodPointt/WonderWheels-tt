import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from '../../api/instance';

export const getAll = createAsyncThunk(
  'reviews/findAll',
  async (page, thunkAPI) => {
    try {
      const data = await fetchAllCars(page);

      const {
        adverts: { favorites },
      } = thunkAPI.getState();

      if (favorites.length > 0) {
        const advertsWithFav = data.map(advert => {
          if (favorites.includes(advert.id)) {
            return { ...advert, isFavorite: true };
          }
          return advert;
        });

        return advertsWithFav;
      }

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
