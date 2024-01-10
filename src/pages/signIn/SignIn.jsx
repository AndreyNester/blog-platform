import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormSignIn from '../../Components/FormSignIn/FormSignIn';
import './SignIn.scss';

function SignIn() {
  const signInLoading = useSelector((state) => state.reducers.logIn.loading);
  // console.log(useSelector((state) => state.reducers.logIn));
  return (
    <section className="signIn">
      <FormDecorator title="Sign In">
        {signInLoading ? (
          <Spin tip="Loading" size="large">
            <FormSignIn />
          </Spin>
        ) : (
          <FormSignIn />
        )}
      </FormDecorator>
    </section>
  );
}

export default SignIn;
