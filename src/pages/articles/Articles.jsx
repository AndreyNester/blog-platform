import { Pagination, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArticleItem from '../../Components/ArticleItem/ArticleItem';
import { actions } from '../../store/articles/articles.slice';
import { fetchArticles } from '../../store/articles/fetchArticles';
import './articles.scss';

function Articles() {
  const dispatch = useDispatch();
  const articlesList = useSelector((state) => state.reducers.articles.list);
  const articlesLoaded = useSelector((state) => state.reducers.articles.loaded);
  const articlesTotalCount = useSelector((state) => state.reducers.articles.totalArticles);
  const currentPage = useSelector((state) => state.reducers.articles.currentPage);

  useEffect(() => {
    dispatch(fetchArticles({ number: currentPage * 5 }));
  }, [currentPage]);

  return articlesLoaded ? (
    <div className="articlesList__container">
      <ul className="articlesList">
        {articlesList.map((item) => (
          <ArticleItem item={item} key={item.slug} />
        ))}
      </ul>
      <Pagination
        total={articlesTotalCount - 5}
        current={currentPage}
        defaultPageSize={5}
        pageSizeOptions={[5]}
        className="articlesList__pagination"
        onChange={(num) => dispatch(actions.onChangePage({ num }))}
      />
    </div>
  ) : (
    <Spin size="large" className="articlesList__spinner" />
  );
}

export default Articles;
