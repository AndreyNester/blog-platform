/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as articleSlice } from './article/article.slice';
import { reducer as articlesSlice } from './articles/articles.slice';
import { reducer as editProfileSlice } from './editProfile/editProfile.slice';
import { reducer as logInSlice } from './logIn/logIn.slice';
import { reducer as signUpSlice } from './signUp/signUp.slice';

const reducers = combineReducers({
  articles: articlesSlice,
  article: articleSlice,
  logIn: logInSlice,
  editProfile: editProfileSlice,
  signUp: signUpSlice,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
