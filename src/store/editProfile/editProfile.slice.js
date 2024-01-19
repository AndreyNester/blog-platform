/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchEditProfile } from './fetchEditProfile';

const initialState = {
  loading: false,
  errorMessage: null,
  successMessage: false,
};

const editProfile = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    resetError: (state) => {
      state.errorMessage = null;
    },
    resetSuccess: (state) => {
      state.successMessage = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditProfile.pending, (state) => {
        state.loading = true;
        state.successMessage = false;
      })
      .addCase(fetchEditProfile.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = true;
        state.errorMessage = false;

        // обновленные данные сохраняются в слайсе логина
      })
      .addCase(fetchEditProfile.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loading = false;
        state.successMessage = false;
        console.log('error edit');
      });
  },
});

export const { actions, reducer } = editProfile;
