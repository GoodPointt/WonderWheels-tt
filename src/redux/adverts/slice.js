import { createSlice } from '@reduxjs/toolkit';
import { getAll, getByMake, getByMileage, getByPrice } from './operations';

const initialState = {
  adverts: [],
  favorites: [],
  page: 1,
  filter: {
    make: '',
    rentalPrice: '',
    mileage: '',
  },
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    reset: () => initialState,
    incrementPage(state) {
      state.page = state.page + 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    handleFavorite(state, { payload }) {
      const idx = state.favorites.findIndex(item => item === payload.id);
      if (idx === -1) {
        state.favorites.push(payload.id);
        state.adverts = state.adverts.map(advert => {
          if (advert.id === payload.id) return { ...advert, isFavorite: true };
          return advert;
        });
      } else {
        state.favorites.splice(idx, 1);
        state.adverts = state.adverts.map(advert => {
          if (advert.id === payload.id) return { ...advert, isFavorite: false };
          return advert;
        });
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAll.fulfilled, (state, { payload }) => {
        if (state.page === 1 || state.filter.make) {
          state.adverts = payload;
        } else {
          state.adverts = [...state.adverts, ...payload];
        }
        state.filter = {
          make: '',
          rentalPrice: '',
          mileage: '',
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getByMake.pending, state => {
        state.isLoading = true;
      })
      .addCase(getByMake.fulfilled, (state, { payload }) => {
        if (state.page === 1) state.adverts = payload;
        else state.adverts = [...state.adverts, ...payload];
        state.filter = { ...state.filter, make: payload[0].make };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getByMake.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getByPrice.pending, state => {
        state.isLoading = true;
      })
      .addCase(getByPrice.fulfilled, (state, { payload }) => {
        if (state.page === 1) state.adverts = payload;
        else state.adverts = [...state.adverts, ...payload];
        state.filter.rentalPrice = payload[0].rentalPrice;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getByPrice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getByMileage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getByMileage.fulfilled, (state, { payload }) => {
        state.adverts = payload;
        state.filter.mileage = {
          ...state.filter,
          mileage: {
            min: payload[0].mileage,
            max: payload[payload.length - 1].mileage,
          },
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getByMileage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { reset, handleFavorite, incrementPage, resetPage } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
