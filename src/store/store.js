/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as articlesSlice } from './articles/articles.slice';
import { reducer as createArticleSlice } from './createArticle/createArticle.slice';
import { reducer as editArticleSlice } from './editArticle/editArticle.slice';
import { reducer as editProfileSlice } from './editProfile/editProfile.slice';
import { reducer as logInSlice } from './logIn/logIn.slice';
import { reducer as signUpSlice } from './signUp/signUp.slice';

const reducers = combineReducers({
  articles: articlesSlice,
  logIn: logInSlice,
  editProfile: editProfileSlice,
  signUp: signUpSlice,
  createArticle: createArticleSlice,
  editArticle: editArticleSlice,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
