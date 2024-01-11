/* eslint-disable import/order */
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEditProfile } from '../../store/editProfile/fetchEditProfile';
import LabelEditProfileAvatar from './Labels/LabelEditProfileAvatar';
import LabelEditProfileEmail from './Labels/LabelEditProfileEmail';
import LabelEditProfilePassword from './Labels/LabelEditProfilePassword';
import LabelEditProfileUsername from './Labels/LabelEditProfileUsername';

function FormEditProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.reducers.logIn.token);
  const errorsMessage = useSelector((state) => state.reducers.editProfile.errorMessage);
  console.log(errorsMessage);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(fetchEditProfile({ ...data, token }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelEditProfileUsername register={register} errors={errors} />
      <LabelEditProfileEmail register={register} errors={errors} />
      <LabelEditProfilePassword register={register} errors={errors} />
      <LabelEditProfileAvatar register={register} errors={errors} />
      {errorsMessage ? <p className="errorMessage">{errorsMessage}</p> : null}

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Save
      </Button>
    </form>
  );
}

export default FormEditProfile;
