import { Link } from 'react-router-dom';

import ArticleItemHeader from '../ArticleItemHeader/ArticleItemHeader';
import './ArticleItem.scss';

function ArticleItem(props) {
  const { item } = props;
  return (
    <li className="articlesList__article articleItem">
      <Link to={`/article/${item.slug}`}>
        <ArticleItemHeader item={item} />
      </Link>
    </li>
  );
}

export default ArticleItem;
