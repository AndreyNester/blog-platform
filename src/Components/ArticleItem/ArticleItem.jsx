import ArticleItemHeader from '../ArticleItemHeader/ArticleItemHeader';
import './ArticleItem.scss';

function ArticleItem(props) {
  const { item } = props;
  return (
    <li className="articlesList__article articleItem">
      <ArticleItemHeader item={item} />
    </li>
  );
}

export default ArticleItem;
