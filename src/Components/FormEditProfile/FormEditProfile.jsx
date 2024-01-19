/* eslint-disable import/order */
import { Alert, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { fetchEditProfile } from '../../store/editProfile/fetchEditProfile';
import LabelEditProfileAvatar from './Labels/LabelEditProfileAvatar';
import LabelEditProfileEmail from './Labels/LabelEditProfileEmail';
import LabelEditProfilePassword from './Labels/LabelEditProfilePassword';
import LabelEditProfileUsername from './Labels/LabelEditProfileUsername';

function FormEditProfile(props) {
  const { errorsMessage, successMessage, token } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(fetchEditProfile({ ...data, token }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {successMessage ? <Alert message="Profile data successfully updated" type="success" /> : null}
      {errorsMessage ? <Alert message={errorsMessage} type="error" /> : null}

      <LabelEditProfileUsername register={register} errors={errors} />
      <LabelEditProfileEmail register={register} errors={errors} />
      <LabelEditProfilePassword register={register} errors={errors} />
      <LabelEditProfileAvatar register={register} errors={errors} />

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Save
      </Button>
    </form>
  );
}

export default FormEditProfile;
