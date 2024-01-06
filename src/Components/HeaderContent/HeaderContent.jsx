import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './HeaderContent.scss';

function HeaderContent() {
  return (
    <div className="header__content">
      <h1 className="layout__header-title">
        <Link to="/" className="layout__header-title">
          Realworld Blog
        </Link>
      </h1>
      <div className="layout__header-btnGroup">
        <Button size="large" className="secondClassBtn">
          Sign In
        </Button>

        <Button size="large" className="firstClassBtn">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default HeaderContent;
