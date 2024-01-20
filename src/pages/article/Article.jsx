/* eslint-disable no-nested-ternary */
import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleItemBody from '../../Components/ArticleItemBody/ArticleItemBody';
// eslint-disable-next-line import/order
import ArticleItemHeader from '../../Components/ArticleItemHeader/ArticleItemHeader';
// eslint-disable-next-line import/order
import NotFoundPage from '../notFoundPage/NotFoundPage';
import './article.scss';
import { fetchArticle } from './fetch/fetchArticle';

function Article() {
  const { slug } = useParams();

  const token = useSelector((state) => state.reducers.logIn.token);

  const [deleteProcessing, setDeleteProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articleContent, setArticleContent] = useState(null);
  const [pageFound, setPageFound] = useState(true);

  useEffect(() => {
    fetchArticle(slug, token)
      .then(({ responce }) => {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error(responce.status);
      })
      .then((responce) => {
        setArticleContent(responce.article);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === '404') {
          setPageFound(false);
          setLoading(false);
        }
        if (err.message === 'Failed to fetch') {
          setPageFound(false);
          setLoading(false);
        }
      });
  }, []);

  return loading ? (
    <Spin size="large" className="article__spinner" />
  ) : pageFound ? (
    <Spin size="large" className="article__spinner" spinning={deleteProcessing}>
      <div className="articleItem articleItem_full">
        <ArticleItemHeader item={articleContent} total setDeleteProcessing={setDeleteProcessing} />
        {articleContent.body ? <ArticleItemBody item={articleContent} /> : null}
      </div>
    </Spin>
  ) : (
    <NotFoundPage />
  );
}

export default Article;
