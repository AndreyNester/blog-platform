import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from '../../store/logIn/logIn.slice';
import UserIcon from '../UserIcon/UserIcon';
import './HeaderContent.scss';

function HeaderContent() {
  const userData = useSelector((state) => state.reducers.logIn);
  const dispatch = useDispatch();
  return (
    <div className="header__content">
      <h1 className="layout__header-title">
        <Link to="/" className="layout__header-title">
          Realworld Blog
        </Link>
      </h1>
      {userData.logined ? (
        <div className="layout__header-btnGroup_logined">
          <button type="button" className="createArticleBtn">
            create article
          </button>
          <Link to="/profile">
            <UserIcon
              item={{
                author: {
                  username: userData.username,
                  image: userData.avatar,
                },
              }}
            />
          </Link>

          <button type="button" className="logOutBtn" onClick={() => dispatch(actions.logOut())}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="layout__header-btnGroup">
          <Link to="sign-in" className="secondClassBtn">
            Sign In
          </Link>

          <Link to="sign-up" className="firstClassBtn" onClick={() => dispatch(actions.logOut())}>
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeaderContent;
