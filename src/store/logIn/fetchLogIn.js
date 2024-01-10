/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLoginUser = createAsyncThunk('loginedUserSlice/loginedUser', async function (action) {
  const { email, password } = action;

  const options = {
    method: 'POST',
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: { email, password } }),
  };

  const response = await fetch('https://blog.kata.academy/api/users/login', options).then((answer) => {
    if (!answer.ok) {
      if (answer.status === 422) throw new Error('invalid password or Email');
      throw new Error('some unexpected error from server');
    }
    return answer.json();
  });

  return {
    response,
  };
});
