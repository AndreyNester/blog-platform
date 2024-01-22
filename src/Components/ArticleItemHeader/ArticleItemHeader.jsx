import { Button, Popconfirm, message } from 'antd';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Likes from '../Likes/Likes';
import TagList from '../TagList/TagList';
// eslint-disable-next-line import/order
import UserIcon from '../UserIcon/UserIcon';
import './ArticleItemHeader.scss';
import { fetchDeleteArticle } from './fetch/fetchDeleteArticle';

function ArticleItemHeader(props) {
  const { item, total, setDeleteProcessing } = props;
  const token = useSelector((state) => state.reducers.logIn.token);
  const isMyArticle = useSelector((state) => state.reducers.logIn.username) === item.author.username;
  const navigate = useNavigate();

  const classnameForFullArticle = classNames({
    total,
  });

  const classnameForFullArticleBtnGroup = classNames({
    userInfo: true,
    isMyArticle,
  });

  const confirm = async () => {
    setDeleteProcessing(true);
    await fetchDeleteArticle(token, item.slug)
      .then((responce) => {
        if (responce.ok) {
          navigate('/');
          message.success('article successfully deleted');
        } else {
          throw new Error('something wrong..');
        }
      })
      .catch(() => {
        message.error('Click on No');
      });
  };

  return (
    <header className={classnameForFullArticle}>
      <div className="articleItem__info">
        <div className="articleItem__titleField">
          <Link to={`/article/${item.slug}`}>
            <h2>{item.title}</h2>
          </Link>

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
