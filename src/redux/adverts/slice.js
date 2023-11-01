import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const initialState = {
  adverts: [],
  favorites: [],
  page: 1,
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
    handleFavorite(state, { payload }) {
      const idx = state.favorites.findIndex(item => item === payload);
      if (idx === -1) {
        state.favorites.push(payload);
        state.adverts = state.adverts.map(advert => {
          if (advert.id === payload) return { ...advert, isFavorite: true };
          return advert;
        });
      } else {
        state.favorites.splice(idx, 1);
        state.adverts = state.adverts.map(advert => {
          if (advert.id === payload) return { ...advert, isFavorite: false };
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
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { reset, handleFavorite, incrementPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
