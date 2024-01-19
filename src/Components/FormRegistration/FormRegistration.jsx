/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Divider } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/order
import { fetchSignUp } from '../../store/signUp/fetchSignUp';
// eslint-disable-next-line import/order
import './FormRegistration.scss';
import LabelRegCheckbox from './labels/LabelRegCheckbox';
import LabelRegEmail from './labels/LabelRegEmail';
import LabelRegPassword from './labels/LabelRegPassword';
import LabelRepeatPassword from './labels/LabelRegRepeatPassword';
import LabelRegUsername from './labels/LabelRegUsername';

function FormRegistration(props) {
  const { errorMessage } = props;
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(fetchSignUp(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelRegUsername register={register} errors={errors} />
      <LabelRegEmail register={register} errors={errors} />
      <LabelRegPassword register={register} errors={errors} />
      <LabelRepeatPassword register={register} errors={errors} getValues={getValues} />
      {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}

      <Divider />

      <LabelRegCheckbox register={register} errors={errors} getValues={getValues} />
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
