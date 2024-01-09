/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { fetchLoginUser } from './fetchLogIn';

const initialState = {
  loading: false,
  logined: false,
  username: null,
  token: null,
  email: null,
};

const loginedUser = createSlice({
  name: 'loginedUser',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        state.loading = true;
        console.log('fetching..');
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        const {
          user: { username, email, token },
        } = action.payload.response;

        state.loading = false;
        state.logined = true;
        state.username = username;
        state.email = email;
        state.token = token;
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.loading = false;
        console.log(state, action);
      });
  },
});

export const { actions, reducer } = loginedUser;
