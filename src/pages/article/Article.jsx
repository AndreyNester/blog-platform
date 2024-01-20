import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleItemBody from '../../Components/ArticleItemBody/ArticleItemBody';
// eslint-disable-next-line import/order
import ArticleItemHeader from '../../Components/ArticleItemHeader/ArticleItemHeader';
import './article.scss';
import { fetchArticle } from './fetch/fetchArticle';

function Article() {
  const { slug } = useParams();

  const token = useSelector((state) => state.reducers.logIn.token);

  const [deleteProcessing, setDeleteProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articleContent, setArticleContent] = useState(null);

  useEffect(() => {
    fetchArticle(slug, token).then((responce) => {
      setArticleContent(responce.responce.article);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Spin size="large" className="article__spinner" />
  ) : (
    <Spin size="large" className="article__spinner" spinning={deleteProcessing}>
      <div className="articleItem articleItem_full">
        <ArticleItemHeader item={articleContent} total setDeleteProcessing={setDeleteProcessing} />
        {articleContent.body ? <ArticleItemBody item={articleContent} /> : null}
      </div>
    </Spin>
  );
}

export default Article;
