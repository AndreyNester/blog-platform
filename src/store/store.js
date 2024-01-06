/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as articleSlice } from './article/article.slice';
import { reducer as articlesSlice } from './articles/articles.slice';

const reducers = combineReducers({
  articles: articlesSlice,
  article: articleSlice,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
