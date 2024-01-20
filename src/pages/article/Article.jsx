import { Spin } from 'antd';
import { useEffect, useState } from 'react';
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
  const token = useSelector((state) => state.reducers.logIn.token);
  const [deleteProcessing, setDeleteProcessing] = useState(false);

  useEffect(() => {
    dispatch(fetchArticle({ slug, token }));
  }, []);

  return loaded ? (
    <Spin size="large" className="article__spinner" spinning={deleteProcessing}>
      <div className="articleItem articleItem_full">
        <ArticleItemHeader item={article} total setDeleteProcessing={setDeleteProcessing} />
        {article.body ? <ArticleItemBody item={article} /> : null}
      </div>
    </Spin>
  ) : (
    <Spin size="large" className="article__spinner" />
  );
}

export default Article;
