import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import UserIcon from '../UserIcon/UserIcon';
import './HeaderContent.scss';

function HeaderContent() {
  const userData = useSelector((state) => state.reducers.logIn);
  console.log(userData);
  return (
    <div className="header__content">
      <h1 className="layout__header-title">
        <Link to="/" className="layout__header-title">
          Realworld Blog
        </Link>
      </h1>
      {userData.logined ? (
        <div className="layout__header-btnGroup">
          <button type="button"> create article</button>
          <UserIcon
            item={{
              author: {
                username: 'nester',
                image: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-ca-py-ba-ra.dlcnmhdda7i5..jpg?preset=image_1280w',
              },
            }}
          />
        </div>
      ) : (
        <div className="layout__header-btnGroup">
          <Button size="large" className="secondClassBtn">
            Sign In
          </Button>

          <Button size="large" className="firstClassBtn">
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
}

export default HeaderContent;
