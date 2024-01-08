/* eslint-disable react/no-unescaped-entities */
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelSignInEmail register={register} errors={errors} />
      <LabelSignInPassword register={register} errors={errors} />
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
