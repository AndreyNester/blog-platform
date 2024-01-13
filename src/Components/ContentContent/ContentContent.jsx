import { Route, Routes } from 'react-router-dom';

import RequireAuth from '../../hoc/RequireAuth';
import Article from '../../pages/article/Article';
import Articles from '../../pages/articles/Articles';
import CreateArticle from '../../pages/createArticle/createArticle';
import EditProfile from '../../pages/editProfile/EditProfile';
import SignIn from '../../pages/signIn/SignIn';
import SignUp from '../../pages/signUp/signUp';
import './ContentContent.scss';

function ContentContent() {
  return (
    <div className="content__container">
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route
          path="/new-article"
          element={
            <RequireAuth>
              <CreateArticle />
            </RequireAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default ContentContent;
