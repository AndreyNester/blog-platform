import { Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleItemBody from '../../Components/ArticleItemBody/ArticleItemBody';
import ArticleItemHeader from '../../Components/ArticleItemHeader/ArticleItemHeader';
import { fetchArticle } from '../../store/article/fetchArticle';
import './article.scss';

function Article() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const {
    loaded,
    article: { article },
  } = useSelector((state) => state.reducers.article);

  useEffect(() => {
    dispatch(fetchArticle({ slug }));
  }, []);

  return loaded ? (
    <div className="articleItem articleItem_full">
      <ArticleItemHeader item={article} total />
      {article.body ? <ArticleItemBody item={article} /> : null}
    </div>
  ) : (
    <Spin size="large" className="article__spinner" />
  );
}

export default Article;
