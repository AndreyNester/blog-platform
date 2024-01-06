/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk('articlesListSlice/fetcharticles', async function (action) {
  const { number } = action;

  const options = {
    Host: 'https://blog.kata.academy',
  };

  const response = await fetch(`https://blog.kata.academy/api/articles?offset=${number}&limit=${5}`, options).then(
    (answer) => answer.json()
  );

  return {
    response,
  };
});
