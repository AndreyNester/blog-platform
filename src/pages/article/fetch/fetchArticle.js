/* eslint-disable import/prefer-default-export */
export const fetchArticle = async (slug, token) => {
  const options = {
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  };

  const responce = await fetch(`https://blog.kata.academy/api/articles/${slug}`, options);

  return {
    responce,
  };
};
