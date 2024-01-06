import classNames from 'classnames';

import TagList from '../TagList/TagList';
import UserIcon from '../UserIcon/UserIcon';
import './ArticleItemHeader.scss';

function ArticleItemHeader(props) {
  const { item, total } = props;
  const classnameForFullArticle = classNames({
    total,
  });
  return (
    <header className={classnameForFullArticle}>
      <div className="articleItem__info">
        <h2>{item.title}</h2>
        <TagList tagList={item.tagList} className="articleItem__tagList" />
        <p className={classnameForFullArticle}>{item.description}</p>
      </div>
      <UserIcon className="articleItem__userInfo" item={item} />
    </header>
  );
}

export default ArticleItemHeader;
