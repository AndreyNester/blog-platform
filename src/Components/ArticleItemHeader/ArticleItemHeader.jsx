import { Button } from 'antd';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import TagList from '../TagList/TagList';
import UserIcon from '../UserIcon/UserIcon';
import './ArticleItemHeader.scss';

function ArticleItemHeader(props) {
  const { item, total } = props;

  const isMyArticle = useSelector((state) => state.reducers.logIn.username) === item.author.username;
  console.log(isMyArticle === item.author.username);

  const classnameForFullArticle = classNames({
    total,
  });

  const classnameForFullArticleBtnGroup = classNames({
    userInfo: true,
    isMyArticle,
  });

  return (
    <header className={classnameForFullArticle}>
      <div className="articleItem__info">
        <h2>{item.title}</h2>
        <TagList tagList={item.tagList} className="articleItem__tagList" />
        <p className={classnameForFullArticle}>{item.description}</p>
      </div>
      <div className={classnameForFullArticleBtnGroup}>
        <UserIcon className="articleItem__userInfo" item={item} />
        <div className="btnGroup">
          <Button type="primary" danger ghost>
            Delete
          </Button>
          <Button ghost className="edit">
            Edit
          </Button>
        </div>
      </div>
    </header>
  );
}

export default ArticleItemHeader;
