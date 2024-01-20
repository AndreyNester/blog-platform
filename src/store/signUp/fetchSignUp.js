/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSignUp = createAsyncThunk('signUpSlice/signUp', async function (action) {
  const { username, email, password } = action;

  const body = {
    user: {
      email,
      username,
      password,
    },
  };

  const options = {
    method: 'POST',
    Host: 'https://blog.kata.academy',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const response = await fetch('https://blog.kata.academy/api/users', options).then((answer) => {
    if (!answer.ok) {
      if (answer.status === 422) throw new Error('this name or address is already taken');
      throw new Error('some unexpected error from server');
    }
    return answer.json();
  });

  return {
    response,
  };
});
