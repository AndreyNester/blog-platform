/* eslint-disable import/prefer-default-export */
export const fetchDeleteArticle = async (token, slug) => {
  const options = {
    method: 'DELETE',
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  };

  const responce = await fetch(`https://blog.kata.academy/api/articles/${slug}`, options).then((answer) => {
    return answer;
  });

  return responce;
};
