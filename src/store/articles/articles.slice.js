/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchArticles } from './fetchArticles';

const initialState = {
  loading: false,
  loaded: false,
  list: [],
  totalArticles: 0,
  currentPage: 1,
};

const articlesList = createSlice({
  name: 'articlesList',
  initialState,
  reducers: {
    onChangePage: (state, action) => {
      const { num } = action.payload;
      state.currentPage = num;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.loaded = false;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.response.articles;
        state.totalArticles = action.payload.response.articlesCount;
        state.loaded = true;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const { actions, reducer } = articlesList;
