import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormSignIn from '../../Components/FormSignIn/FormSignIn';
import { actions } from '../../store/logIn/logIn.slice';
import './SignIn.scss';

function SignIn() {
  const signInLoading = useSelector((state) => state.reducers.logIn.loading);
  const errorMessage = useSelector((state) => state.reducers.logIn.errorMessage);
  const logined = useSelector((state) => state.reducers.logIn.logined);
  // console.log(useSelector((state) => state.reducers.logIn));
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(signInLoading);
  }, [signInLoading]);

  useEffect(() => {
    return () => dispatch(actions.resetError());
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (logined) {
      navigate('/', { replace: true });
    }
  }, [logined]);

  return (
    <section className="signIn">
      <FormDecorator title="Sign In">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormSignIn setLoading={setLoading} errorMessage={errorMessage} />
        </Spin>
      </FormDecorator>
    </section>
  );
}

export default SignIn;
