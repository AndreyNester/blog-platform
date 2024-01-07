/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Divider } from 'antd';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/order
import { classnameForInput } from '../FormDecorator/utils/classnameForInput';
import './FormRegistration.scss';
import {
  validateConfigEmail,
  validateConfigPassword,
  validateConfigRepeatPassword,
  validateConfigUsername,
} from './validateConfigs/validateConfigs';

function FormRegistration() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <h4>Username</h4>
        <input
          type="text"
          placeholder="Username"
          className={classnameForInput(errors?.username)}
          {...register('username', validateConfigUsername())}
        />
        <p>{errors?.username?.message}</p>
      </label>

      <label>
        <h4>Email address</h4>
        <input
          type="email"
          placeholder="Email address"
          className={classnameForInput(errors?.email)}
          {...register('email', validateConfigEmail())}
        />
        <p>{errors?.email?.message}</p>
      </label>

      <label>
        <h4>Password</h4>
        <input
          type="password"
          placeholder="Password"
          className={classnameForInput(errors?.password)}
          {...register('password', validateConfigPassword())}
        />
        <p>{errors?.password?.message}</p>
      </label>

      <label>
        <h4>Repeaet Password</h4>
        <input
          type="password"
          placeholder="Password"
          className={classnameForInput(errors?.repeatPassword)}
          {...register('repeatPassword', validateConfigRepeatPassword(getValues))}
        />
        <p>{errors?.repeatPassword?.message || (errors?.repeatPassword && 'Password must match')}</p>
      </label>

      <Divider />

      <label className="agreeField">
        <input type="checkbox" {...register('checkboxAgree')} />
        <span> I agree to the processing of my personal information</span>
      </label>

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Create
      </Button>

      <span className="decorator__info">
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </span>
    </form>
  );
}

export default FormRegistration;
