import { Button, Popconfirm, message } from 'antd';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Likes from '../Likes/Likes';
import TagList from '../TagList/TagList';
import UserIcon from '../UserIcon/UserIcon';
import './ArticleItemHeader.scss';

function ArticleItemHeader(props) {
  const { item, total } = props;

  const isMyArticle = useSelector((state) => state.reducers.logIn.username) === item.author.username;

  const classnameForFullArticle = classNames({
    total,
  });

  const classnameForFullArticleBtnGroup = classNames({
    userInfo: true,
    isMyArticle,
  });

  const confirm = () => {
    console.log('delete article');
    message.success('Click on Yes');
  };
  const cancel = () => {
    console.log('not delete article');
    message.error('Click on No');
  };
  return (
    <header className={classnameForFullArticle}>
      <div className="articleItem__info">
        <div className="articleItem__titleField">
          <h2>{item.title}</h2>
          <Likes item={item} total={total} />
        </div>

        <TagList tagList={item.tagList} className="articleItem__tagList" />
        <p className={classnameForFullArticle}>{item.description}</p>
      </div>

      <div className={classnameForFullArticleBtnGroup}>
        <UserIcon className="articleItem__userInfo" item={item} />
        {total ? (
          <div className="btnGroup">
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              {' '}
              <Button size="large" ghost danger className="delete">
                Delete
              </Button>
            </Popconfirm>

            <Link to={`/articles/${item.slug}/edit`} className="edit" state={{ item }}>
              <span>Edit</span>
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default ArticleItemHeader;
