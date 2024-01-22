/* eslint-disable no-nested-ternary */

/* eslint-disable react/button-has-type */
import { LoadingOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import './Likes.scss';
import { fetchDislike } from './fetch/fetchDislike';
import { fetchLike } from './fetch/fetchLike';
import likeIcon from './img/likeIcon.svg';
import likeIconLiked from './img/likeIcon_liked.svg';

function Likes(props) {
  const {
    item: { favoritesCount, favorited, slug },
  } = props;

  const [state, setState] = useState({
    favorited,
    favoritesCount,
    loadingLike: false,
  });

  const token = useSelector((Gstate) => Gstate.reducers.logIn.token);
  const like = async () => {
    setState((prevState) => ({
      ...prevState,
      loadingLike: true,
    }));

    if (state.favorited) {
      await fetchDislike(slug, token)
        .then((responce) => {
          if (responce.errors) {
            if (responce.errors.error.status === 401) {
              throw new Error('not authorized');
            }
            throw new Error('some error');
          }

          setState((prevState) => ({
            ...prevState,
            favorited: responce.article.favorited,
            favoritesCount: responce.article.favoritesCount,
            loadingLike: false,
          }));
        })
        .catch(() => {
          message.error('some error was happend : (');
          setState((prevState) => {
            return { ...prevState, loadingLike: false };
          });
        });
    } else {
      await fetchLike(slug, token)
        .then((responce) => {
          if (responce.errors) {
            if (responce.errors.error.status === 401) {
              throw new Error('not authorized');
            }
            throw new Error('some error');
          }
          setState((prevState) => ({
            ...prevState,
            favorited: responce.article.favorited,
            favoritesCount: responce.article.favoritesCount,
            loadingLike: false,
          }));
        })
        .catch((err) => {
          console.log(err);
          message.error('some error was happend : (');
          setState((prevState) => {
            return { ...prevState, loadingLike: false };
          });
        });
    }
  };

  return (
    <div className="likesCountField">
      {state.favorited ? (
        state.loadingLike ? (
          <LoadingOutlined />
        ) : (
          <>
            <button onClick={() => like()}>
              <img src={likeIconLiked} alt="like icon" />
            </button>
            <p className="likesCount">{state.favoritesCount}</p>
          </>
        )
      ) : state.loadingLike ? (
        <LoadingOutlined />
      ) : (
        <>
          <button onClick={() => like()}>
            <img src={likeIcon} alt="like icon" />
          </button>
          <p className="likesCount">{state.favoritesCount}</p>
        </>
      )}
    </div>
  );
}

export default Likes;
