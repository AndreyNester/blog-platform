import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormRegistration from '../../Components/FormRegistration/FormRegistration';
import './signUp.scss';

function SignUp() {
  const signUpLoading = useSelector((state) => state.reducers.signUp.loading);
  console.log(useSelector((state) => state.reducers));
  return (
    <section className="signUp">
      <FormDecorator title="Create new account">
        {signUpLoading ? (
          <Spin tip="Loading" size="large">
            <FormRegistration />
          </Spin>
        ) : (
          <FormRegistration />
        )}
      </FormDecorator>
    </section>
  );
}

export default SignUp;
