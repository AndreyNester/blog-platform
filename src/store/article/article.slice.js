/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchArticle } from './fetchArticle';

const initialState = {
  loading: false,
  loaded: false,
  article: {},
};

const articlesList = createSlice({
  name: 'article',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.loading = true;
        state.loaded = false;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.article = action.payload.response;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const { actions, reducer } = articlesList;
