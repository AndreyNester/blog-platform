/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchSignUp } from './fetchSignUp';

const initialState = {
  loading: false,
  errorMessage: null,
};

const editProfile = createSlice({
  name: 'signUp',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSignUp.fulfilled, (state) => {
        state.loading = false;

        // обновленные данные сохраняются в слайсе логина
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loading = false;
        console.log(action);
      });
  },
});

export const { actions, reducer } = editProfile;
