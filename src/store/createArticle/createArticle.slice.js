/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchCreateArticle } from './fetchCreateArticle';

const initialState = {
  loading: false,
  errors: false,
};

const createArticle = createSlice({
  name: 'createArticle',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateArticle.pending, (state) => {
        state.loading = true;
        console.log('fetching createArticle...');
      })
      .addCase(fetchCreateArticle.fulfilled, (state, action) => {
        state.loading = false;
        console.log('fullfilled createArticle');
        console.log(action);
      })
      .addCase(fetchCreateArticle.rejected, (state, action) => {
        state.loading = false;
        state.errors = true;
        console.log(action);
      });
  },
});

export const { actions, reducer } = createArticle;
