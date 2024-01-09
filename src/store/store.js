/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as articleSlice } from './article/article.slice';
import { reducer as articlesSlice } from './articles/articles.slice';
import { reducer as logInSlice } from './logIn/logIn.slice';

const reducers = combineReducers({
  articles: articlesSlice,
  article: articleSlice,
  logIn: logInSlice,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
