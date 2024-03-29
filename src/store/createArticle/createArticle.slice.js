/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchCreateArticle } from './fetchCreateArticle';

const initialState = {
  loading: false,
  errorReq: false,
  successReq: false,
};

const createArticle = createSlice({
  name: 'createArticle',
  initialState,
  reducers: {
    resetSuccessReq(state) {
      state.successReq = false;
    },
    setSuccessReq(state) {
      state.successReq = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateArticle.pending, (state) => {
        state.loading = true;
        state.successReq = false;
      })
      .addCase(fetchCreateArticle.fulfilled, (state) => {
        state.loading = false;
        state.successReq = true;
      })
      .addCase(fetchCreateArticle.rejected, (state, action) => {
        state.loading = false;
        state.errorReq = true;
        console.log(action);
      });
  },
});

export const { actions, reducer } = createArticle;
