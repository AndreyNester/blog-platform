/* eslint-disable import/order */

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/order
import { fetchEditProfile } from '../editProfile/fetchEditProfile';
import { fetchSignUp } from '../signUp/fetchSignUp';
import { fetchLoginUser } from './fetchLogIn';

const initialState = {
  loading: false,
  logined: !!sessionStorage.getItem('token'),
  username: sessionStorage.getItem('username') ? sessionStorage.getItem('username') : null,
  token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
  avatar: sessionStorage.getItem('avatar') ? sessionStorage.getItem('avatar') : null,
  email: sessionStorage.getItem('email') ? sessionStorage.getItem('email') : null,
  errorMessage: null,
};

const loginedUser = createSlice({
  name: 'loginedUser',
  initialState,
  reducers: {
    logOut: (state) => {
      sessionStorage.clear();

      // eslint-disable-next-line no-unused-vars
      state.loading = false;
      state.logined = false;
      state.username = null;
      state.token = null;
      state.avatar = null;
      state.email = null;
      state.errorMessage = null;
    },
    resetError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        state.loading = true;
        console.log('fetching..');
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        const {
          user: { username, email, token, image },
        } = action.payload.response;

        console.log(action);

        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('avatar', image || null);
        sessionStorage.setItem('email', email);

        state.loading = false;
        state.logined = true;
        state.avatar = image;
        state.username = username;
        state.email = email;
        state.token = token;
        state.errorMessage = null;
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.loading = false;
        console.log('error');
        console.log(action.error);
        state.errorMessage = action.error.message;
      })
      .addCase(fetchEditProfile.fulfilled, (state, action) => {
        const {
          user: { username, email, token, image },
        } = action.payload.response;

        state.username = username;
        state.email = email;
        state.token = token;
        state.errorMessage = null;
        state.avatar = image;

        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('avatar', image);
        sessionStorage.setItem('email', email);
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        const {
          user: { username, email, token, image },
        } = action.payload.response;

        console.log(username, email, token, image);

        state.logined = true;
        state.username = username;
        state.email = email;
        state.token = token;
        state.errorMessage = null;
        state.avatar = image;

        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('avatar', image);
        sessionStorage.setItem('email', email);
      });
  },
});

export const { actions, reducer } = loginedUser;
