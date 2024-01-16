// eslint-disable-next-line import/prefer-default-export
export const fetchLike = async (slug, token) => {
  const options = {
    method: 'POST',
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  };

  const responce = await fetch(`https://blog.kata.academy/api/articles/${slug}/favorite`, options).then((answer) => {
    return answer.json();
  });

  return responce;
};
