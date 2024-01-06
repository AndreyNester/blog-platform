import { Route, Routes } from 'react-router-dom';

import Article from '../../pages/article/Article';
import Articles from '../../pages/articles/Articles';
import './ContentContent.scss';

function ContentContent() {
  return (
    <div className="content__container">
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:slug" element={<Article />} />
      </Routes>
    </div>
  );
}

export default ContentContent;
