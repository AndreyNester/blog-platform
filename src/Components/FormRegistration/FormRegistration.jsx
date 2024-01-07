/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Checkbox, Divider, Input } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './FormRegistration.scss';

function FormRegistration() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [secondPasswordVisible, setSecondPasswordVisible] = useState(false);

  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repPasswordValue, setRepPasswordValue] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(register, errors);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        <h4>Username</h4>
        <Input
          placeholder="Basic usage"
          id="username"
          name="username"
          showCount
          maxLength={20}
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
      </label>

      <label htmlFor="email">
        <h4>Email address</h4>
        <Input
          placeholder="Basic usage"
          id="email"
          name="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </label>

      <label htmlFor="password">
        <h4>Password</h4>
        <Input.Password
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          id="password"
          placeholder="input password"
          name="password"
          showCount
          maxLength={60}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </label>

      <label htmlFor="repeatPassword">
        <h4>Repeaet Password</h4>
        <Input.Password
          value={repPasswordValue}
          onChange={(e) => setRepPasswordValue(e.target.value)}
          id="repeatPassword"
          placeholder="input password"
          name="repeatPassword"
          showCount
          maxLength={60}
          visibilityToggle={{
            visible: secondPasswordVisible,
            onVisibleChange: setSecondPasswordVisible,
          }}
        />
      </label>
      <Divider />

      <Checkbox checked={checkboxStatus} onChange={() => setCheckboxStatus((prevState) => !prevState)}>
        I agree to the processing of my personal information
      </Checkbox>

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
