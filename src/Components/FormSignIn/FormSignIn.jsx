/* eslint-disable react/no-unescaped-entities */
import { Button } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/order
import { fetchLoginUser } from '../../store/logIn/fetchLogIn';
import LabelSignInEmail from './labels/LabelSignInEmail';
import LabelSignInPassword from './labels/LabelSignInPassword';

/* eslint-disable jsx-a11y/label-has-associated-control */
function FormSignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const errorMessage = useSelector((state) => state.reducers.logIn.errorMessage);
  const logined = useSelector((state) => state.reducers.logIn.logined);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(fetchLoginUser(data));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (logined) {
      navigate('/', { replace: true });
    }
  }, [logined]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelSignInEmail register={register} errors={errors} />
      <LabelSignInPassword register={register} errors={errors} />
      {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Login
      </Button>

      <span className="decorator__info">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </span>
    </form>
  );
}

export default FormSignIn;
