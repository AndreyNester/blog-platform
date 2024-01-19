import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormRegistration from '../../Components/FormRegistration/FormRegistration';
import { actions } from '../../store/signUp/signUp.slice';
import './signUp.scss';

function SignUp() {
  const signUpLoading = useSelector((state) => state.reducers.signUp.loading);
  const logined = useSelector((state) => state.reducers.logIn.logined);
  const errorMessage = useSelector((state) => state.reducers.signUp.errorMessage);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(signUpLoading);
  }, [signUpLoading]);

  useEffect(() => {
    if (logined) {
      navigate('/', { replace: true });
    }
  }, [logined]);

  useEffect(() => {
    return () => dispatch(actions.resetError());
  }, []);

  return (
    <section className="signUp">
      <FormDecorator title="Create new account">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormRegistration errorMessage={errorMessage} />
        </Spin>
      </FormDecorator>
    </section>
  );
}

export default SignUp;
