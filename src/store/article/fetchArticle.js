/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticle = createAsyncThunk('articleSlice/fetchArticle', async function (action) {
  const { slug, token } = action;

  const options = {
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  };

  const response = await fetch(`https://blog.kata.academy/api/articles/${slug}`, options).then((answer) =>
    answer.json()
  );

  return {
    response,
  };
});
