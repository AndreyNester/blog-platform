/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchEditArticle } from './fetchEditArticle';

const initialState = {
  loading: false,
  errorReq: false,
  successReq: false,
};

const editArticle = createSlice({
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
      .addCase(fetchEditArticle.pending, (state) => {
        state.loading = true;
        state.successReq = false;
      })
      .addCase(fetchEditArticle.fulfilled, (state) => {
        state.loading = false;
        state.successReq = true;
      })
      .addCase(fetchEditArticle.rejected, (state, action) => {
        state.loading = false;
        state.errorReq = true;
        console.log(action);
      });
  },
});

export const { actions, reducer } = editArticle;
