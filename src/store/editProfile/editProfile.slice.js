/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchEditProfile } from './fetchEditProfile';

const initialState = {
  loading: false,
  errorMessage: null,
};

const editProfile = createSlice({
  name: 'editProfile',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEditProfile.fulfilled, (state) => {
        state.loading = false;

        // обновленные данные сохраняются в слайсе логина
      })
      .addCase(fetchEditProfile.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loading = false;
        console.log('error edit');
      });
  },
});

export const { actions, reducer } = editProfile;
